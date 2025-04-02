import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, RotateCcw, ShieldCheck, Heart, Share2 } from "lucide-react"
import ProductCard from "@/components/product-card"

// Sample product data
const product = {
  id: "1",
  name: "Premium Dumbbell Set with Adjustable Weights",
  description:
    "This premium dumbbell set offers adjustable weights from 5 to 25 pounds per dumbbell, perfect for home workouts. The set includes a sturdy storage rack and features a sleek, modern design that will complement any home gym setup.",
  price: 20,
  originalPrice: 500,
  category: "Gym Equipment",
  rating: 4.8,
  reviews: 24,
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  features: [
    "Adjustable weights from 5-25 lbs per dumbbell",
    "Includes storage rack",
    "Quick-change weight system",
    "Ergonomic handles with non-slip grip",
    "Space-saving design",
  ],
  specifications: {
    Material: "Steel weights with rubber coating",
    "Weight Range": "5-25 lbs per dumbbell (10-50 lbs total)",
    Dimensions: '16" x 8" x 9" (with rack)',
    Color: "Black/Silver",
    Warranty: "1 year manufacturer warranty",
  },
}

// Related products
const relatedProducts = [
  {
    id: "8",
    name: "Smart Home Gym",
    description: "Interactive fitness equipment with digital coaching",
    price: 95,
    originalPrice: 3000,
    category: "Gym Equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "9",
    name: "Yoga Set Premium",
    description: "Complete yoga set with mat, blocks, and straps",
    price: 15,
    originalPrice: 200,
    category: "Gym Equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "10",
    name: "Adjustable Weight Bench",
    description: "Professional-grade weight bench for various exercises",
    price: 25,
    originalPrice: 450,
    category: "Gym Equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          <div className="sticky top-24">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-rose-500 cursor-pointer"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <div className="mb-2">
            <Link
              href={`/category/${product.category.toLowerCase()}`}
              className="text-sm text-gray-500 hover:text-rose-600"
            >
              {product.category}
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                />
              ))}
              <span className="ml-2 text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500">{product.reviews} reviews</span>
          </div>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-gray-500">/month</span>
            <Badge className="ml-2 bg-navy-100 text-navy-700 hover:bg-navy-200">
              Save ${product.originalPrice - product.price * 12}/year
            </Badge>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="flex-1">
              Rent Now
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-navy-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Free Delivery</h3>
                <p className="text-sm text-gray-500">Delivered to your doorstep</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="h-5 w-5 text-navy-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Easy Returns</h3>
                <p className="text-sm text-gray-500">Schedule a pickup when you're done</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-navy-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Damage Protection</h3>
                <p className="text-sm text-gray-500">Basic protection included with your rental</p>
              </div>
            </div>
          </div>

          <div className="border-t border-b py-6 mb-8">
            <h3 className="font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-navy-100 text-navy-600 p-1 rounded-full">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Save</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
            <div className="text-sm text-gray-500">Item ID: {product.id}</div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none">
            <TabsTrigger value="details">Details & Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-gray-700">
                  Experience the convenience of a complete home gym setup without the commitment of purchasing expensive
                  equipment. This premium dumbbell set is perfect for beginners and fitness enthusiasts alike, offering
                  versatile weight options for a variety of exercises.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 py-2 border-b">
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-6">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xl font-bold ml-2">{product.rating}</span>
              </div>
              <p className="text-gray-600 mb-6">Based on {product.reviews} reviews</p>
              <Button>Write a Review</Button>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="py-6">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
              <p className="text-gray-700 mb-4">
                We offer free delivery for all rental items. Your items will be delivered within 2-3 business days after
                your order is confirmed.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-6">Return Policy</h3>
              <p className="text-gray-700 mb-4">
                When your rental period is coming to an end, you'll receive a notification to either extend your rental
                or schedule a return. Returns are easy - simply schedule a pickup and we'll handle the rest.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-6">Purchase Option</h3>
              <p className="text-gray-700">
                If you fall in love with your rented item, you have the option to purchase it. The purchase price will
                be the original price minus a percentage of the rental fees you've already paid.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

