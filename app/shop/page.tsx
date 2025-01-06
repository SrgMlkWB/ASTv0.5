"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="aspect-square bg-muted rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Medical Device 1</h2>
            <p className="text-muted-foreground mb-4">
              High-quality medical device for professional use.
            </p>
            <p className="text-lg font-bold">$999.99</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="aspect-square bg-muted rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Medical Device 2</h2>
            <p className="text-muted-foreground mb-4">
              Professional-grade equipment for medical facilities.
            </p>
            <p className="text-lg font-bold">$1,499.99</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="aspect-square bg-muted rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Medical Device 3</h2>
            <p className="text-muted-foreground mb-4">
              Advanced medical equipment with latest technology.
            </p>
            <p className="text-lg font-bold">$2,999.99</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
