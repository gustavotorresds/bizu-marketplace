import ProductCard from "./product-card"

const featuredProducts = [
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
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

