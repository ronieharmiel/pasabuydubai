// Netlify Function: Fetch latest posts from a Facebook Page and map to products
// Requires env: FB_PAGE_ID, FB_ACCESS_TOKEN
export async function handler(){
  const PAGE_ID = process.env.FB_PAGE_ID
  const TOKEN = process.env.FB_ACCESS_TOKEN
  try{
    if(!PAGE_ID || !TOKEN){
      return {
        statusCode: 200,
        body: JSON.stringify({ products: [] })
      }
    }
    const fields = 'id,message,permalink_url,created_time,attachments{media_type,media,url,subattachments},full_picture'
    const url = `https://graph.facebook.com/v20.0/${PAGE_ID}/posts?fields=${encodeURIComponent(fields)}&limit=24&access_token=${TOKEN}`
    const res = await fetch(url)
    if(!res.ok){
      const txt = await res.text()
      return { statusCode: 200, body: JSON.stringify({ products: [], error: txt }) }
    }
    const data = await res.json()
    const products = (data.data||[]).map(p=>{
      // Try to pick a decent image
      let img = p.full_picture
      const att = p.attachments?.data?.[0]
      if(att?.media?.image?.src) img = att.media.image.src
      // Try to parse a price like "₱1,234" or "PHP 1234" in message
      let price = null
      if(p.message){
        const m = p.message.match(/(?:₱|PHP\s*)([0-9,\.]+)/i)
        if(m) price = `₱${m[1]}`
      }
      return {
        id: p.id,
        title: (p.message||'Item').split('\n')[0].slice(0,80),
        description: p.message||'',
        image: img,
        price,
        permalink: p.permalink_url
      }
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ products })
    }
  }catch(e){
    return { statusCode: 200, body: JSON.stringify({ products: [], error: e.message }) }
  }
}
