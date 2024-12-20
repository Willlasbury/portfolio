
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><div  className="hover:text-gray-300">About</div></li>
          <li><div  className="hover:text-gray-300">Projects</div></li>
          <li><div  className="hover:text-gray-300">Contact</div></li>
        </ul>
      </nav>
    </header>
  )
}

