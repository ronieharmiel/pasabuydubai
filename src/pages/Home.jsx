import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Shop Dubai finds, delivered to the Philippines.
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Real listings synced from our Facebook page. Message us to reserve and pay via bank deposit or GCash.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/products" className="px-5 py-3 rounded-xl bg-sky-600 text-white">Browse Products</Link>
            <a href="https://www.facebook.com/shopforlesspasabuydubaitopinas" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-gray-900 text-white">Visit our Facebook</a>
          </div>
        </div>
      </div>
      <div className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border">
            <div className="text-lg font-semibold">Fast Pasabuy</div>
            <div className="text-gray-600 mt-1">We source from Dubai and deliver to Metro Manila + nearby areas.</div>
          </div>
          <div className="p-6 rounded-2xl border">
            <div className="text-lg font-semibold">Secure Payments</div>
            <div className="text-gray-600 mt-1">Bank deposit (BPI) or GCash accepted.</div>
          </div>
          <div className="p-6 rounded-2xl border">
            <div className="text-lg font-semibold">Messenger Support</div>
            <div className="text-gray-600 mt-1">Chat with us—our page auto-replies in our usual tone.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
