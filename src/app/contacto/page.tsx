import PageHero from "@/components/common/PageHero";
import { socialLinks } from "@/lib/data";
import { Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export default function ContactoPage() {
    return (
        <>
            <PageHero title="Contacto" imageId="contact-hero" objectPosition="object-[center_15%]" />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-balance">Conversemos</h2>
                        <p className="text-lg text-muted-foreground text-pretty">
                            ¿Tienes un proyecto en mente o una consulta? Escríbeme directamente por cualquiera de estos medios.
                        </p>
                    </div>

                    <div className="mt-12 max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
                        <a
                            href="https://wa.me/528110165108"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3 rounded-lg bg-secondary p-8 text-center transition-colors hover:bg-accent/10"
                        >
                            <WhatsAppIcon className="h-10 w-10 text-accent" />
                            <span className="font-headline text-xl font-bold">WhatsApp</span>
                            <span className="text-muted-foreground group-hover:text-accent transition-colors">+52 81 1016 5108</span>
                        </a>
                        <a
                            href="mailto:mauriciodelamaza70@gmail.com"
                            className="group flex flex-col items-center gap-3 rounded-lg bg-secondary p-8 text-center transition-colors hover:bg-accent/10"
                        >
                            <Mail className="h-10 w-10 text-accent" />
                            <span className="font-headline text-xl font-bold">Correo</span>
                            <span className="text-muted-foreground group-hover:text-accent transition-colors break-all">mauriciodelamaza70@gmail.com</span>
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span>Monterrey, México</span>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="font-headline text-2xl font-bold mb-4">Sígueme</h3>
                        <div className="flex justify-center space-x-4">
                            {socialLinks.filter(social => social.name !== 'WhatsApp').map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-accent transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-7 w-7" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
