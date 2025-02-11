import ModalPopup from "./ui/modal-popup"

export default function Hero() {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">William Asbury's Portfolio</h1>
        <p className="text-xl mb-8">Thank you for visiting this page. I have included links to all projects that are relevent
          to my skills. Please feel free to reach out to me if you have any questions.
        </p>
        <ModalPopup />
      </div>
    </section>
  )
}

