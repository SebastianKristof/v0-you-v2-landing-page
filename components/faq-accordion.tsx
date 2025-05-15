"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden transition-all duration-300">
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          <div className={`p-4 ${openIndex === index ? "block" : "hidden"}`}>{item.answer}</div>
        </div>
      ))}
    </div>
  )
}
