import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, SlidersHorizontal } from "lucide-react"
import ProductCard from "@/components/product-card"
import { getProducts, type Product } from "@/lib/services/products"
import { Suspense } from "react"

// Categories are still hardcoded for now
const categories = [
  "All Categories",
  "Gym Equipment",
  "Furniture",
  "Designer Clothes",
  "Photography",
  "Musical Instruments",
  "Electronics",
]

// Loading component for products
function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

// Products grid component
async function ProductsGrid() {
  try {
    console.log('Fetching products...')
    const response = await getProducts(1, 12)
    console.log('Products response:', response)
    
    if (!response) {
      console.error('No response received from getProducts')
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h2>
          <p className="text-gray-600 mb-4">There are no products available at the moment.</p>
        </div>
      )
    }

    if (!Array.isArray(response.products)) {
      console.error('Products is not an array:', response)
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Invalid response format</h2>
          <p className="text-gray-600 mb-4">The server returned an unexpected response format.</p>
        </div>
      )
    }

    if (response.products.length === 0) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h2>
          <p className="text-gray-600 mb-4">There are no products available at the moment.</p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.products.map((product) => (
          <ProductCard 
            key={product._id} 
            product={{
              id: product._id,
              name: product.name,
              description: product.description,
              price: product.price,
              originalPrice: product.originalPrice,
              category: product.category,
              image: product.images[0] || "/placeholder.svg?height=300&width=300",
            }} 
          />
        ))}
      </div>
    )
  } catch (error) {
    console.error('Error in ProductsGrid:', error)
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">Unable to load products. Please try again later.</p>
      </div>
    )
  }
}

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
          <Suspense fallback={<ProductsLoading />}>
            <ProductsGrid />
          </Suspense>

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

