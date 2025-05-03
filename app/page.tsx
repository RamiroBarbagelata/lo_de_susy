import Link from "next/link"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteLogo } from "@/components/site-logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
          <div
            className="h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/logo/fondo-sanmartin.jpg')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6 text-center">
              <div className="flex justify-center">
                <SiteLogo size="xl" className="mb-1" />
              </div>
              <div className="mt-1 flex justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#properties">Ver Casas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Disfrutá San Martín de los Andes</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                Entre montañas, lagos y senderos, San Martín de los Andes te invita a conectarte con la naturaleza y relajarte en un entorno único. Nuestras casas son el lugar ideal para descansar y salir a explorar todo lo que esta joya de la Patagonia tiene para ofrecer.
                </p>
                <div className="mt-6 flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>San Martin de los Andes, Neuquén, Argentina</span>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src="/images/logo/san_martin_logo.jpg"
                  alt="San Martin de los Andes landscape"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Nuestras Casas</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <PropertyCard
                id="house-1"
                name="Casa 4 Personas"
                description="Una cabaña acogedora con estilo patagónico, ideal para familias o grupos chicos que buscan confort y tranquilidad en San Martín de los Andes."
                features={["1 Habitaciones", "1 Baño", "Cocina totalmente equipada", "Acepta mascotas pequeñas", "Lugar para estacionar"]}
                price="Consultar"
                image="/images/casa4/fachada_4_personas_lo_de_susy.jpg"
              />
              <PropertyCard
                id="house-2"
                name="Casa 5 Personas"
                description="Una casa cómoda y luminosa, pensada para familias o grupos de hasta cinco personas que buscan descansar y disfrutar de San Martín de los Andes."
                features={["2 Habitaciones", "1 Baño", "Cocina totalmente equipada", "Acepta mascotas pequeñas", "Lugar para estacionar"]}
                price="Consultar"
                image="/images/casa5/casa_5_personas_fachada.jpg"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
