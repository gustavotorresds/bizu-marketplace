import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  category: string
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-60 w-full overflow-hidden">
        <Badge className="absolute top-3 left-3 z-10 bg-navy-600">
          Save ${product.originalPrice - product.price * 12}/yr
        </Badge>
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <Link href={`/product/${product.id}`} className="hover:underline">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-gray-500 text-sm">/month</span>
          <span className="text-gray-400 text-xs line-through">${product.originalPrice} to buy</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Rent Now</Button>
      </CardFooter>
    </Card>
  )
}

