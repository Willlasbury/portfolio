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
          <div className="grid gap-4 py-4 overflow-y-scroll no-scrollbar">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae harum, provident id ea tempore molestiae ratione nisi distinctio fuga ipsa inventore, dolore molestias, numquam similique et consequuntur hic neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae harum, provident id ea tempore molestiae ratione nisi distinctio fuga ipsa inventore, dolore molestias, numquam similique et consequuntur hic neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae harum, provident id ea tempore molestiae ratione nisi distinctio fuga ipsa inventore, dolore molestias, numquam similique et consequuntur hic neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae harum, provident id ea tempore molestiae ratione nisi distinctio fuga ipsa inventore, dolore molestias, numquam similique et consequuntur hic neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae harum, provident id ea tempore molestiae ratione nisi distinctio fuga ipsa inventore, dolore molestias, numquam similique et consequuntur hic neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae harum, provident id ea tempore molestiae ratione nisi distinctio fuga ipsa inventore, dolore molestias, numquam similique et consequuntur hic neque.</p>
          </div>
          <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

