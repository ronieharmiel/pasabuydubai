export async function fetchProducts() {
  try {
    const res = await fetch('/.netlify/functions/fb-products')
    if (!res.ok) throw new Error('FB fetch failed')
    const data = await res.json()
    return data.products || []
  } catch (e) {
    console.warn('Falling back to sample products:', e.message)
    const res = await fetch('/data/sample-products.json')
    const data = await res.json()
    return data.products || []
  }
}
