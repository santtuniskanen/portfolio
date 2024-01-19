"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectCarousel() {
  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-sm py-4"
  >
    <CarouselContent>
      {Array.from({ length: 4 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">
                  {index + 1}
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}