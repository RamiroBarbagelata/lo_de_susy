"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
    images: string[]
    initialIndex?: number
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ImageLightbox({ images, initialIndex = 0, open, onOpenChange }: ImageLightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            handlePrevious()
        } else if (e.key === "ArrowRight") {
            handleNext()
        } else if (e.key === "Escape") {
            onOpenChange(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogOverlay className="bg-black/80" />
            <DialogContent
                className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent shadow-none"
                onKeyDown={handleKeyDown}
            >
                <div className="relative flex items-center justify-center w-full h-full">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
                        onClick={() => onOpenChange(false)}
                    >
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close</span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
                        onClick={handlePrevious}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Previous image</span>
                    </Button>

                    <div className="flex items-center justify-center w-full h-full">
                        <img
                            src={images[currentIndex] || "/placeholder.svg"}
                            alt={`Image ${currentIndex + 1}`}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Next image</span>
                    </Button>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
