import { Link } from 'react-router-dom'
import logo from "../assets/travelvibesonly.jpg";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/"
        className="text-2xl font-bold text-blue-600">
        <img src={logo} alt="Travelvibesonly Logo" className="w-auto h-20 rounded-full" />
       </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-bold">Home</Link>
        <Link to="/tours" className="text-gray-700 hover:text-blue-600 font-bold">Tours</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-bold">Contact</Link>
        <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-bold">Travel Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar