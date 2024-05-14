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
    <div className="relative pt-8">
      <h2 className="text-slate-900 font-bold text-2xl">Careers</h2>
      <Carousel className="mx-10 mt-10">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
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
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button variant="link" className="float-right pt-1">
        Show more...
      </Button>
    </div>
  );
};

export default ProjectList;
