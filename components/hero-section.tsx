import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-navy-50 to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Luxury Living, <span className="text-navy-600">Without Commitment</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Rent high-end furniture, designer clothes, and premium gym equipment. Try before you buy or simply enjoy
              luxury for less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="What would you like to rent?" className="pl-10 h-12 rounded-full" />
              </div>
              <Button size="lg" className="h-12 px-8 rounded-full">
                Find Items
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="bg-navy-100 text-navy-600 p-1 rounded-full mr-2">✓</span>
                Free Delivery
              </div>
              <div className="flex items-center">
                <span className="bg-navy-100 text-navy-600 p-1 rounded-full mr-2">✓</span>
                Flexible Returns
              </div>
              <div className="flex items-center">
                <span className="bg-navy-100 text-navy-600 p-1 rounded-full mr-2">✓</span>
                Buy Option
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="relative h-full w-full">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Luxury furniture arrangement"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

