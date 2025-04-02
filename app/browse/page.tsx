import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, SlidersHorizontal } from "lucide-react"
import ProductCard from "@/components/product-card"

// Sample product data
const products = [
  {
    id: "1",
    name: "Premium Dumbbell Set",
    description: "Complete set with adjustable weights",
    price: 20,
    originalPrice: 500,
    category: "Gym Equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Designer Evening Gown",
    description: "Perfect for galas and special events",
    price: 45,
    originalPrice: 1200,
    category: "Designer Clothes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Modern Sectional Sofa",
    description: "Elegant and comfortable for your living room",
    price: 65,
    originalPrice: 1800,
    category: "Furniture",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Professional Camera Kit",
    description: "DSLR with multiple lenses and accessories",
    price: 75,
    originalPrice: 2500,
    category: "Photography",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Acoustic Guitar",
    description: "Premium sound quality for musicians",
    price: 35,
    originalPrice: 900,
    category: "Musical Instruments",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Standing Desk",
    description: "Adjustable height for ergonomic work",
    price: 40,
    originalPrice: 1100,
    category: "Furniture",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    name: "Designer Handbag",
    description: "Luxury accessory for any occasion",
    price: 55,
    originalPrice: 1500,
    category: "Designer Clothes",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    name: "Smart Home Gym",
    description: "Interactive fitness equipment with digital coaching",
    price: 95,
    originalPrice: 3000,
    category: "Gym Equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const categories = [
  "All Categories",
  "Gym Equipment",
  "Furniture",
  "Designer Clothes",
  "Photography",
  "Musical Instruments",
  "Electronics",
]

export default function BrowsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse All Items</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700">
                Reset
              </Button>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox id={`category-${category}`} />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="text-sm font-medium mb-3">Monthly Price Range</h3>
                <Slider defaultValue={[50]} max={200} step={5} />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-500">$0</span>
                  <span className="text-sm text-gray-500">$200+</span>
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <h3 className="text-sm font-medium mb-3">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="available-now" />
                    <label
                      htmlFor="available-now"
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Available Now
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="available-soon" />
                    <label
                      htmlFor="available-soon"
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Available Soon
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search items..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Sort By: Newest</span>
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-rose-50 text-rose-600">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

