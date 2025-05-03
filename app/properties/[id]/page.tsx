"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Clock, ImageIcon, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageLightbox } from "@/components/image-lightbox"

// This is a mock database of properties
const properties = {
  "house-1": {
    id: "house-1",
    name: "Casa de 4 Personas",
    description: "A cozy cabin with stunning mountain views, perfect for families or small groups.",
    longDescription: `
      Esta cálida casa de montaña es el refugio ideal para quienes buscan desconectar del ritmo de la ciudad y disfrutar la naturaleza de San Martín de los Andes.
Cuenta con una habitación con cama matrimonial, dos camas individuales en el living-comedor, cocina totalmente equipada y un espacio acogedor para descansar.
Ubicada a pocas cuadras del centro, combina la tranquilidad del entorno con la comodidad de tener cerca todo lo que necesitás: restaurantes, comercios y actividades al aire libre.
    `,
    price: "Consultar",
    capacity: "4 Huéspedes",
    bedrooms: "1 Habitación",
    bathrooms: "1 Baño",
    checkIn: "12:00 PM",
    checkOut: "10:00 AM",
    features: ["Cocina Completa", "Calefacción", "Wi-Fi", "Acepta Mascotas Pequeñas", "Lugar para Estacionar"],
    amenities: [
      "Ropa Blanca",
      "Vajilla Completa",
      "Heladera Bajomesada",
      "Microondas",
      "Pava Eléctrica",
      "Cafetera",
      "Tostadora",
      "Planca",
      "Secador de Pelo",
      "Smart TV 32 pulgadas (YouTube, Netflix, Disney+, DGO"
    ],
    location: "Ubicada en el centro de San Martin de los Andes",
    images: [
      "/images/casa4/fachada_4_personas_lo_de_susy.jpg",
      "/images/casa4/cocina_4_personas_lo_de_susy.jpeg",
      "/images/casa4/camas_4_personas_lo_de_susy.jpg",
      "/images/casa4/bano_4_personas_lo_de_susy.jpg",
      "/images/casa4/bano2_4_personas_lo_de_susy.jpg",
    ],
  },
  "house-2": {
    id: "house-2",
    name: "Casa de 5 Personas",
    description: "A spacious house near the lake with modern amenities and beautiful surroundings.",
    longDescription: `
      Esta amplia casa es ideal para familias o grupos que quieran disfrutar de la belleza de San Martín de los Andes y el Lago Lácar. Cuenta con 2habitaciones cómodas, 1 baño, una cocina totalmente equipada, y un living-comedor espacioso. Está ubicada a 4 cuadras de la avenida San Martín y a 12 cuadras del lago Lácar.
    `,
    price: "Consultar",
    capacity: "5 Huéspedes",
    bedrooms: "2 Habbitaciones",
    bathrooms: "1 Baño",
    checkIn: "12:00 PM",
    checkOut: "10:00 AM",
    features: ["Cocina Completa", "Calefacción", "Wi-Fi", "Acepta Mascotas Pequeñas", "Lugar para Estacionar"],
    amenities: [
      "Ropa Blanca",
      "Vajilla Completa",
      "Lavarropas",
      "Heladera",
      "Microondas",
      "Pava Eléctrica",
      "Cafetera",
      "Tostadora",
      "Planca",
      "Secador de Pelo",
      "Smart TV 32 pulgadas (YouTube, Netflix, Disney+, DGO"
    ],
    location: "Ubicada en el centro de San Martin de los Andes",
    images: [
      "/images/casa5/casa_5_personas_fachada.jpg",
      "/images/casa5/casa_5_personas_living.jpg",
      "/images/casa5/casa_5_personas_comedor.jpg",
      "/images/casa5/casa_5_personas_cocina.jpg",
      "/images/casa5/casa_5_personas_habitacion_doble.jpg",
      "/images/casa5/casa_5_personas_habitacion_simple.jpg",
      "/images/casa5/casa_5_personas_bano.jpg",
    ],
  },
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties[params.id]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!property) {
    return <div>Property not found</div>
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Property Images */}
        <section className="container px-4 md:px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className="lg:col-span-2 aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <img
                src={property.images[0] || "/placeholder.svg"}
                alt={property.name}
                className="object-cover w-full h-full hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index + 1)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${property.name} - Image ${index + 2}`}
                    className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile image gallery (visible only on smaller screens) */}
          <div className="grid grid-cols-4 gap-2 mt-2 lg:hidden">
            {property.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${property.name} - Image ${index + 2}`}
                  className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
          {/* View All Photos Button (Mobile) */}
          <div className="mt-4 lg:hidden">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={() => openLightbox(0)}
            >
              <ImageIcon className="h-4 w-4" />
              View All Photos ({property.images.length})
            </Button>
          </div>
        </section>

        {/* Property Details */}
        <section className="container px-4 md:px-6 py-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold">{property.name}</h1>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>

              <div className="mt-6">
                <Tabs defaultValue="description">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="description">Descripción</TabsTrigger>
                    <TabsTrigger value="photos">Fotos</TabsTrigger>
                    <TabsTrigger value="features">Características</TabsTrigger>
                    <TabsTrigger value="location">Ubicación</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-6">
                    <div className="prose max-w-none">
                      <p>{property.longDescription}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="photos" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.images.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                          onClick={() => openLightbox(index)}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${property.name} - Image ${index + 1}`}
                            className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-6">
                    <div className="grid gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Features</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {property.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {property.amenities.map((amenity, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="location" className="mt-6">
                    <div className="h-[300px] bg-muted rounded-xl overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.4307304805934!2d-71.35275552335028!3d-40.15184407148346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110e7707d155bb%3A0x3f130d368eee078d!2sLo%20de%20Susy!5e1!3m2!1ses!2sar!4v1746237344649!5m2!1ses!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <p className="mt-4 text-muted-foreground">{property.location}</p>
                  </TabsContent>

                </Tabs>
              </div>
            </div>

            <div>
              <div className="bg-muted p-6 rounded-xl sticky top-6">
                <div className="mb-4">
                  <div className="text-2xl font-bold">
                    {property.price}
                    <span className="text-base font-normal text-muted-foreground">/night</span>
                  </div>
                </div>

                <div className="grid gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>{property.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-muted-foreground"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-muted-foreground"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{property.bathrooms}</span>
                  </div>
                </div>

                {/* Check-in/Check-out Schedule */}
                <div className="bg-primary/10 p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-2 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Horarios
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Check-in</p>
                      <p className="font-bold">{property.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Check-out</p>
                      <p className="font-bold">{property.checkOut}</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full gap-2">
                  <a href="https://wa.me/5492941234567" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contactanos via WhatsApp
                  </a>
                </Button>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm text-center text-muted-foreground">
                    ¿Te interesa esta propiedad? Contáctanos por WhatsApp para consultar disponibilidad y hacer la reserva.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Image Lightbox */}
      <ImageLightbox
        images={property.images}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </div>
  )
}