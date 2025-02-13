import React, { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const useCarousel = (itemCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount)
  }, [itemCount])

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount)
  }, [itemCount])

  return { currentIndex, next, prev }
}

interface CarouselProps {
  children: React.ReactNode
  renderBottomContent?: (currentIndex: number) => React.ReactNode
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const items = React.Children.toArray(children)
  const { currentIndex, next, prev } = useCarousel(items.length)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-6 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

