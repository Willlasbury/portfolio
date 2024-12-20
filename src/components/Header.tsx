import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My Portfolio</Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="#projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

