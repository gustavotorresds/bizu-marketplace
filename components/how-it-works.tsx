import { Search, Calendar, Truck, RotateCcw } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse & Select",
    description: "Find the perfect item from our curated collection of luxury products.",
  },
  {
    icon: Calendar,
    title: "Choose Duration",
    description: "Select how long you'd like to rent the item, with flexible monthly options.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "We'll deliver your items right to your doorstep at no extra cost.",
  },
  {
    icon: RotateCcw,
    title: "Return or Buy",
    description: "Return the item when you're done or purchase it if you've fallen in love.",
  },
]

export default function HowItWorks() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How Bizu Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Renting luxury items has never been easier. Follow these simple steps to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-navy-50 p-4 rounded-full mb-4">
              <step.icon className="h-8 w-8 text-navy-600" />
            </div>
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

