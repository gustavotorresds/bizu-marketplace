'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"
import { Product } from "@/lib/services/products"

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    category: string;
    image: string;
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square rounded-t-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.preventDefault()
              // TODO: Implement wishlist functionality
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{product.category}</Badge>
          </div>

          <h3 className="font-semibold mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

          <div className="flex items-baseline justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">4.8</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                <span className="text-xs text-green-600">/month</span>
              </div>
            </div>
            <Button size="sm">Rent Now</Button>
          </div>
        </div>
      </Link>
    </div>
  )
}

