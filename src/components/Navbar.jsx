import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">Travelvibesonly</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/tours" className="text-gray-700 hover:text-blue-600">Tours</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar