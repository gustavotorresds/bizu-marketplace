import Link from "next/link"
import { Dumbbell, Sofa, Shirt, Camera, Music, Laptop } from "lucide-react"

const categories = [
  { name: "Gym Equipment", icon: Dumbbell, href: "/category/gym" },
  { name: "Furniture", icon: Sofa, href: "/category/furniture" },
  { name: "Designer Clothes", icon: Shirt, href: "/category/clothes" },
  { name: "Photography", icon: Camera, href: "/category/photography" },
  { name: "Musical Instruments", icon: Music, href: "/category/music" },
  { name: "Electronics", icon: Laptop, href: "/category/electronics" },
]

export default function CategorySection() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="bg-navy-50 p-4 rounded-full mb-3">
              <category.icon className="h-6 w-6 text-navy-600" />
            </div>
            <span className="text-sm font-medium text-center">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

