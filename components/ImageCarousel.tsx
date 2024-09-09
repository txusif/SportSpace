import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative h-[200px] md:h-[400px]">
                <Image
                  src={image}
                  alt="Image"
                  fill
                  className="object-cover max-lg:rounded-t-md lg:rounded-l-md"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"default"} />
      <CarouselNext variant={"default"} />
    </Carousel>
  );
};

export default ImageCarousel;
