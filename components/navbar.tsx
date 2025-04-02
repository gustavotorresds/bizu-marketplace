"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, ShoppingBag, Heart, User, Dumbbell, Sofa, Shirt, Camera, Music, Laptop } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const categories = [
  { name: "Gym Equipment", icon: Dumbbell, href: "/category/gym" },
  { name: "Furniture", icon: Sofa, href: "/category/furniture" },
  { name: "Designer Clothes", icon: Shirt, href: "/category/clothes" },
  { name: "Photography", icon: Camera, href: "/category/photography" },
  { name: "Musical Instruments", icon: Music, href: "/category/music" },
  { name: "Electronics", icon: Laptop, href: "/category/electronics" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-navy-600"></div>
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                <span className="font-bold text-navy-600">B</span>
              </div>
            </div>
            <span className="text-xl font-bold">Bizu</span>
          </Link>

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={category.href}
                              className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="bg-navy-50 p-2 rounded-full">
                                <category.icon className="h-4 w-4 text-navy-600" />
                              </div>
                              <div className="text-sm font-medium">{category.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/browse" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                    >
                      Browse All
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/how-it-works" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                    >
                      How It Works
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        {!isMobile && (
          <div className="relative w-full max-w-sm mx-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search for items..." className="pl-10 pr-4 h-9 rounded-full" />
          </div>
        )}

        <div className="flex items-center gap-4">
          {!isMobile && (
            <>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </>
          )}

          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          {isMobile && (
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background">
          <div className="container py-6 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search for items..." className="pl-10 pr-4" />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="flex items-center gap-2 p-3 rounded-md hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="bg-navy-50 p-2 rounded-full">
                      <category.icon className="h-4 w-4 text-navy-600" />
                    </div>
                    <span className="text-sm">{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/browse"
                className="block p-3 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse All
              </Link>
              <Link
                href="/how-it-works"
                className="block p-3 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/wishlist"
                className="block p-3 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
              <Link href="/cart" className="block p-3 rounded-md hover:bg-accent" onClick={() => setIsMenuOpen(false)}>
                Cart
              </Link>
            </div>

            <div className="pt-4 border-t">
              <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                Sign In / Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

