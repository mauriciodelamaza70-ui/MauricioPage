import PageHero from "@/components/common/PageHero";
import { collaborators } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {collaborators.map((collab) => (
              <Card key={collab.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">{collab.name}</CardTitle>
                  <p className="text-base text-accent font-semibold pt-1">{collab.title}</p>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
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
