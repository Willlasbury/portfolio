import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function ModalPopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">About Me</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>About Me</DialogTitle>
            {/* <DialogDescription>This is a simple modal that pops up when you click the button.</DialogDescription> */}
          </DialogHeader>
          <div id='modal-about' className="grid gap-4 py-4 overflow-y-scroll no-scrollbar">
            <section>
              <h2>About Me</h2>
              <p>
                I’ve spent the past few years transitioning into a programming career after realizing that my previous work in chemical manufacturing no longer aligned with my values and long-term goals. My journey began with building on the basic programming skills I learned in college, and I committed to deepening my knowledge by pursuing a Full Stack Web Development certificate from the University of Washington. This program allowed me to focus on both front-end and back-end technologies, strengthening my ability to build robust, scalable web applications.
              </p>
            </section>

            <section>
              <h2>Projects & Experience</h2>

              <h3>Rock Climbing Training Application</h3>
              <p>
                One of my key projects involved creating a rock climbing training app that integrates with a Tindeq Progressor, a Bluetooth-enabled dynamometer. This device captures data during training, which is then displayed in a React web application. I also designed and implemented a server to store this data in an open-source SQL database. This project gave me hands-on experience with Bluetooth integration, React, and server-side development, and I was excited to see how my work could directly benefit the climbing community.
              </p>

              <h3>Contract Work at Hyperlabs Inc.</h3>
              <p>
                I’ve also completed a short-term contract with Hyperlabs Inc., where I built a graphical user interface (GUI) using TypeScript, React, and Recharts. This GUI visualized data collected from an oscilloscope, providing users with easy-to-understand insights. This experience allowed me to hone my skills in TypeScript, data visualization, and user experience design.
              </p>
            </section>

            <section>
              <h2>Skills & Technologies</h2>
              <ul>
                <li><strong>Programming Languages:</strong> Python, JavaScript, TypeScript</li>
                <li><strong>Frameworks & Libraries:</strong> React, Node.js</li>
                <li><strong>Databases:</strong> SQL, PostgreSQL</li>
                <li><strong>Tools:</strong> Git, Docker</li>
                <li><strong>Other:</strong> Bluetooth integration, Data Visualization (Recharts)</li>
              </ul>
            </section>

            <section>
              <h2>Looking Forward</h2>
              <p>
                I’m passionate about continuously improving my skills and contributing to innovative projects that have a meaningful impact. I’m excited about the opportunity to apply my skills in a dynamic, growth-oriented company like Remitly, and I look forward to the possibility of collaborating with a team that values both personal and professional development.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </div >
  )
}

