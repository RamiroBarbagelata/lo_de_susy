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
}

export function PropertyCard2({ id, name, description, features, price }: PropertyCardProps) {
    return (
        <Card className="overflow-hidden">
            <div className="relative aspect-video">
                <img src="/images/casa5/casa_5_personas_fachada.jpg" alt={name} className="object-cover w-full h-full" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {price}/night
                </div>
            </div>
            <CardHeader>
                <h3 className="text-xl font-bold">{name}</h3>
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