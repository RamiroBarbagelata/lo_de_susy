import Image from "next/image"
import Link from "next/link"

interface SiteLogoProps {
    className?: string
    size?: "xs" | "sm" | "md" | "lg" | "xl"
}

export function SiteLogo({ className = "", size = "md" }: SiteLogoProps) {
    const sizes = {
        xs: "h-20 w-auto",
        sm: "h-22 w-auto",
        md: "h-26 w-auto",
        lg: "h-30 sm:h-34 md:h-38 w-auto",
        xl: "h-46 sm:h-54 md:h-62 lg:h-70 w-auto", // Much bigger size (about 5x larger)
    }

    return (
        <Link href="/" className={`block ${className}`}>
            <Image
                src="/images/logo/logo_lo_de_susy_alpha_blanco.png"
                alt="Lo de Susy"
                width={480}
                height={240}
                className={sizes[size]}
                priority
            />
        </Link>
    )
}