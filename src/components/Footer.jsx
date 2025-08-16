export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Shop for Less Pasabuy Dubai</div>
        <div className="mt-1">Payments: Bank deposit & GCash (see details on the Payments page).</div>
      </div>
    </footer>
  )
}