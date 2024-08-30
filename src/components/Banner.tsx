"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselImages } from "@/constants/carousel";
import Image from "next/image";

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000 })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full bg-gray-900"
    >
      <CarouselContent className="w-full">
        {Array.from(carouselImages).map((image, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="w-full">
              <Card className="w-full ml-2">
                <CardContent className="flex items-center justify-center p-0 w-full h-[300px] md:h-[400px] relative">
                  <Image 
                    src={image} 
                    layout="fill" 
                    objectFit="cover" 
                    alt={`Banner Image ${index + 1}`} 
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
