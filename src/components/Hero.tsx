import ModalPopup from "./ui/modal-popup"

export default function Hero() {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">William Asbury's Portfolio</h1>
        <p className="text-xl mb-8">I'm a web developer, software developer, and rock climber</p>
        <ModalPopup />
      </div>
    </section>
  )
}

