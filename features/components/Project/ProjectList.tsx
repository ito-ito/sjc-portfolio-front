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
    <div className="snap-start pb-16 h-screen content-center" id="careers">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-400 text-center pb-8">
        Careers
      </h2>
      <Carousel className="mx-8">
        <CarouselContent>
          {projects.map((project) => {
            const options = {
              year: "numeric",
              month: "short",
            };
            const startDate = new Intl.DateTimeFormat("en-US", options).format(
              new Date(project.start_date)
            );
            const endDate =
              project.end_date &&
              Intl.DateTimeFormat("en-US", options).format(new Date(project.end_date));

            return (
              <>
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>
                        {startDate} -{endDate && `${endDate}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>{project.description}</CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </CarouselItem>
              </>
            );
          })}
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
