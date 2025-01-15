import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">I'm a web developer passionate about creating amazing digital experiences.</p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

