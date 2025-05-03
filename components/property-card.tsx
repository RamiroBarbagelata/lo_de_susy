import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PropertyCardProps {
  id: string
  name: string
  description: string
  features: string[]
  price: string
  image?: string
}

export function PropertyCard({
  id,
  name,
  description,
  features,
  price,
  image = "/placeholder.svg?height=600&width=800",
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/properties/${id}`} className="block relative aspect-video cursor-pointer group">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {price}/precio
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
      </Link>
      <CardHeader>
        <Link href={`/properties/${id}`} className="hover:underline">
          <h3 className="text-xl font-bold">{name}</h3>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="grid gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/properties/${id}`}>Ver Detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
