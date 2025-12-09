import PageHero from "@/components/common/PageHero";
import { collaborators } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { User } from "lucide-react";

export default function ColaboradoresPage() {
  return (
    <>
      <PageHero title="Colaboradores" imageId="about-hero" />
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Nuestros Expertos</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a los talentosos profesionales y escritores que dan vida a nuestra revista con sus conocimientos y perspectivas únicas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborators.map((collab) => (
              <Card key={collab.name} className="flex flex-col text-center items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-accent">
                  {collab.image ? (
                    <Image
                      src={collab.image}
                      alt={collab.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-muted">
                      <User className="h-16 w-16 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl">{collab.name}</CardTitle>
                  <p className="text-sm text-accent font-semibold pt-1">{collab.title}</p>
                </CardHeader>
                <CardContent className="p-0 mt-4 text-sm text-muted-foreground">
                  <p>{collab.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
