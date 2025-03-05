export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-4 rounded-t-md z-10">
      <div className="container mx-auto text-center">
        <ul className="flex justify-between flex-col">
          <li>
            <p>Email: asburyw229@gmail.com</p>
          </li>
          <li>
            <p >GitHub: <a target="_blank" href="https://github.com/willlasbury" className="text-blue-400 hover:underline">github.com/willlasbury</a></p>
          </li>
          <li>
            <p>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/william-asbury-2613a824b/" className="text-blue-400 hover:underline">linkedin.com/in/william-asbury-2613a824b/</a></p>
          </li>
        </ul>
      </div>
    </footer>
  )
}

