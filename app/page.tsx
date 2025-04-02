import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <CategorySection />

        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Items</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden md:flex">
                <Search className="mr-2 h-4 w-4" />
                Search All
              </Button>
              <Link href="/browse">
                <Button>Browse All</Button>
              </Link>
            </div>
          </div>

          <FeaturedProducts />
        </div>

        <HowItWorks />
        <Testimonials />
      </div>
    </main>
  )
}

