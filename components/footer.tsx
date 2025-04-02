import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-navy-600"></div>
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                  <span className="font-bold text-navy-600">B</span>
                </div>
              </div>
              <span className="text-xl font-bold">Bizu</span>
            </div>
            <p className="text-gray-600 mb-4">
              Luxury living without commitment. Rent high-end furniture, designer clothes, and premium gym equipment.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="text-gray-600 hover:text-navy-600">
                  Browse All
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-navy-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-navy-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-navy-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-navy-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/gym" className="text-gray-600 hover:text-navy-600">
                  Gym Equipment
                </Link>
              </li>
              <li>
                <Link href="/category/furniture" className="text-gray-600 hover:text-navy-600">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/category/clothes" className="text-gray-600 hover:text-navy-600">
                  Designer Clothes
                </Link>
              </li>
              <li>
                <Link href="/category/photography" className="text-gray-600 hover:text-navy-600">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/category/music" className="text-gray-600 hover:text-navy-600">
                  Musical Instruments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-white" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bizu Marketplace. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/terms" className="hover:text-navy-600">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-navy-600">
              Privacy Policy
            </Link>
            <Link href="/returns" className="hover:text-navy-600">
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

