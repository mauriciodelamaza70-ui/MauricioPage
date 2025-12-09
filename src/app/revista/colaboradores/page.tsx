import PageHero from "@/components/common/PageHero";
import { collaborators } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { User } from "lucide-react";

export default function ColaboradoresPage() {
  return (
    <>
      <PageHero title="Colaboradores" imageId="about-hero" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Nuestros Expertos</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a los talentosos profesionales y escritores que dan vida a nuestra revista con sus conocimientos y perspectivas únicas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {collaborators.map((collab) => (
              <Card key={collab.name} className="flex flex-col md:flex-row items-start overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                 <div className="relative w-full md:w-52 h-64 md:h-auto flex-shrink-0">
                    {collab.image ? (
                        <Image
                            src={collab.image}
                            alt={collab.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full bg-secondary">
                            <User className="h-24 w-24 text-muted-foreground" />
                        </div>
                    )}
                </div>
                <div className="flex flex-col p-6">
                    <CardHeader className="p-0">
                        <CardTitle className="font-headline text-3xl">{collab.name}</CardTitle>
                        <p className="text-base text-accent font-semibold pt-1">{collab.title}</p>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 space-y-4 text-muted-foreground">
                        <p>{collab.bio}</p>
                    </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
