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
import { Project } from "@/app/utils/project/types";

interface Props {
  projects: Project[];
}

const ProjectList = (props: Props) => {
  const { projects } = props;

  return (
    <div className="pb-16 h-1/2 sm:h-screen content-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-400 text-center pb-8">
        Careers
      </h2>
      <Carousel className="mx-8">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
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
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full content-center text-center">
              <Button variant="link">Show more...</Button>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectList;
