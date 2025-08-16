export default function ProductCard({item, onOpen}){
  return (
    <button onClick={()=>onOpen(item)} className="text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border">
      <div className="aspect-square w-full bg-gray-100 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
      </div>
      <div className="p-3">
        <div className="font-medium line-clamp-2">{item.title}</div>
        <div className="text-sm text-gray-500 line-clamp-2 mt-1">{item.description}</div>
        <div className="mt-2 font-semibold">{item.price || 'DM for price'}</div>
      </div>
    </button>
  )
}