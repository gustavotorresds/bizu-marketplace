import { getProductById } from '@/lib/services/products'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Calendar, Package, Shield } from 'lucide-react'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const product = await getProductById(params.id)

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg?height=600&width=600"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant={product.availability ? "default" : "destructive"}>
                  {product.availability ? "Available" : "Not Available"}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">{product.rating.toFixed(1)}</span>
                <span className="text-gray-500">({product.reviews.length} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Package className="h-4 w-4" />
                <span>Condition: {product.condition}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">${product.price}</span>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
                <span className="text-green-600 text-sm">/month</span>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-sm text-gray-500">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full" size="lg">
                Rent Now
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Add to Wishlist
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Free delivery within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="font-medium">{review.rating}</span>
                  <span className="text-gray-500">by {review.user}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}

