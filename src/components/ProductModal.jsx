export default function ProductModal({item, onClose}){
  if(!item) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden" onClick={e=>e.stopPropagation()}>
        <div className="grid md:grid-cols-2">
          <div className="bg-gray-100 aspect-square">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <div className="mt-4">
              <div className="text-lg font-bold">{item.price || 'DM for price'}</div>
              <a className="inline-block mt-4 px-4 py-2 rounded-lg bg-sky-600 text-white"
                 href={item.permalink} target="_blank" rel="noreferrer">
                Message on Facebook
              </a>
              <div className="text-xs text-gray-500 mt-2">* Product info synced from the FB page.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}