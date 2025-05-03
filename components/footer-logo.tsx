import Image from "next/image"
import Link from "next/link"

interface FooterLogoProps {
    className?: string
}

export function FooterLogo({ className = "" }: FooterLogoProps) {
    return (
        <Link href="/" className={`block ${className}`}>
            <Image
                src="/images/logo/logo_lo_de_susy_alpha.png"
                alt="Lo de Susy"
                width={240}
                height={120}
                className="h-12 w-auto"
            />
        </Link>
    )
}
