import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const fetchProducts = async () => {
  const response = await fetch("http://back:3000/products", {
    cache: "no-store",
  });
  return response.json();
};

const ProductsList = async () => {
  const products = await fetchProducts();
  return (
    <>
      <Carousel className="mx-10 mt-10">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="lg:basis-1/2">
              <Card className="overflow-hidden relative">
                <Image className="w-full" src={product.image_url} alt="" width={500} height={500} />
                <div className="absolute top-0 h-full content-center opacity-0 hover:opacity-100 hover:bg-white/80">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{product.description}</p>
                  </CardContent>
                  <CardFooter>{product.url && <p>Card Footer</p>}</CardFooter>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

const Product = () => {
  return (
    <div className="relative pt-8">
      <h2 className="text-slate-900 font-bold text-2xl">Products</h2>
      <ProductsList />
    </div>
  );
};

export default Product;
