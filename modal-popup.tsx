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
    <div className="flex items-center justify-center min-h-screen">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modal Title</DialogTitle>
            <DialogDescription>This is a simple modal that pops up when you click the button.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>You can add any content here inside the modal.</p>
          </div>
          <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

