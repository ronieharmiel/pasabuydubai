import { useEffect, useState } from 'react'
import { fetchProducts } from '../lib/api'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

export default function Products(){
  const [items, setItems] = useState([])
  const [active, setActive] = useState(null)

  useEffect(()=>{
    fetchProducts().then(setItems)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it)=> <ProductCard key={it.id} item={it} onOpen={setActive}/>)}
      </div>
      <ProductModal item={active} onClose={()=>setActive(null)} />
    </section>
  )
}
