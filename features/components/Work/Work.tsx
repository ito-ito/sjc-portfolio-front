import { Button } from "@/components/ui/button";
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

const fetchProjects = async () => {
  const response = await fetch("http://back:3000/projects?limit=5", {
    cache: "no-store",
  });
  return response.json();
};

export const ProjectsList = async () => {
  const duties = await fetchProjects();

  return (
    <>
      <Carousel className="mx-10 mt-10">
        <CarouselContent>
          {duties.map((duty) => (
            <CarouselItem key={duty.id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>{duty.title}</CardTitle>
                  <CardDescription>description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Content</p>
                </CardContent>
                <CardFooter>
                  <p>Footer</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button variant="link" className="float-right pt-1">
        Show more...
      </Button>
    </>
  );
};

const Work = () => {
  return (
    <div className="relative pt-8">
      <h2 className="text-slate-900 font-bold text-2xl">Careers</h2>
      <ProjectsList />
    </div>
  );
};

export default Work;
