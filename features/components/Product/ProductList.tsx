import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Product } from "@/app/utils/product/types";

interface Props {
  products: Product[];
}

const ProductList = (props: Props) => {
  const { products } = props;
  return (
    <div className="relative pt-8">
      <h2 className="text-slate-900 font-bold text-2xl">Products</h2>
      <Carousel className="mx-10 mt-10">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="lg:basis-1/2">
              <Card className="overflow-hidden relative">
                <Image className="w-full" src={product.image_url} alt="" width={500} height={500} />
                <div className="absolute top-0 h-full content-center opacity-0 hover:opacity-100 hover:bg-white/80">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="hidden md:inline-block">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>{product.url && <p>Card Footer</p>}</CardFooter>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductList;
