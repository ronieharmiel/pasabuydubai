import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export default function Header(){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Pasabuy Dubai" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-semibold">Shop for Less — Pasabuy Dubai</div>
            <div className="text-xs text-gray-500">Dubai → Philippines</div>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4">
          <NavLink to="/" className={({isActive})=>`px-3 py-2 rounded-md ${isActive?'bg-sky-100 text-sky-700':'hover:bg-gray-100'}`}>Home</NavLink>
          <NavLink to="/products" className={({isActive})=>`px-3 py-2 rounded-md ${isActive?'bg-sky-100 text-sky-700':'hover:bg-gray-100'}`}>Products</NavLink>
          <NavLink to="/contact" className={({isActive})=>`px-3 py-2 rounded-md ${isActive?'bg-sky-100 text-sky-700':'hover:bg-gray-100'}`}>Payments & Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
