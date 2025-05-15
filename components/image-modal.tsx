"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div
        className="relative h-full w-full cursor-pointer transition-all duration-300 hover:opacity-90"
        onClick={openModal}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity hover:opacity-100">
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium">View</span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              className="absolute -right-4 -top-4 rounded-full bg-white p-2 shadow-md"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-[80vh] w-[80vw] max-w-4xl">
              <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
