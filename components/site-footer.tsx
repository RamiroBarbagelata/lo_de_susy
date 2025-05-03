import Link from "next/link"
import { MapPin } from "lucide-react"
import { FooterLogo } from "@/components/footer-logo"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <FooterLogo className="mb-4" />
            <p className="text-muted-foreground max-w-md mb-6">
              Viví la belleza de la Patagonia alojándote en nuestras casas cómodas y bien ubicadas en San Martín de los Andes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Calderón 1032, San Martin de los Andes, Neuquén, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="text-sm">contact@sanmartinrentals.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="text-sm">+54 294 123-4567</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="h-[300px] bg-background rounded-xl overflow-hidden">
              {/* This is where you would embed a map showing the locations */}
              <div className="h-[300px] bg-background rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.4307304805934!2d-71.35275552335028!3d-40.15184407148346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110e7707d155bb%3A0x3f130d368eee078d!2sLo%20de%20Susy!5e1!3m2!1ses!2sar!4v1746237344649!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lo de Susy. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
    </footer >
  )
}
