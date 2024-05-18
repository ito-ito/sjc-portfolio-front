import { Product } from "@/app/utils/product/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface Props {
  products: Product[];
}

const ProductList = (props: Props) => {
  const { products } = props;
  return (
    <div className="pb-16 h-1/2 sm:h-screen content-center" id="products">
      <h2 className="text-2xl sm:text-3xl text-semibold text-slate-300 text-center pb-8">
        Products
      </h2>
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="">
              <Card className="overflow-hidden">
                <Image
                  className="aspect-[3/2] md:aspect-[23/10] w-full h-auto object-cover"
                  src={product.image_url}
                  alt=""
                  width={500}
                  height={500}
                />
                <div className="absolute top-0 h-full w-full content-center text-center bg-white/30">
                  <div className="w-4/5 mx-auto flex flex-col items-center">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="hidden md:inline-block">
                      {product.description}
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" className="opacity-80">
                        <Link href={product.url ? product.url : "#"} target="_blank">
                          詳細を見る
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
    </div>
  );
};

export default ProductList;
