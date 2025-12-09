import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/pages/contact/ContactForm";
import { socialLinks } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export default function ContactoPage() {
    return (
        <>
            <PageHero title="Contacto" imageId="contact-hero" />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-headline text-4xl md:text-5xl font-bold">Conversemos</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    ¿Tienes un proyecto en mente o una consulta? Estoy aquí para escucharte.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <WhatsAppIcon className="h-6 w-6 text-accent" />
                                    <a href="https://wa.me/528110165108" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors">+52 81 1016 5108</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-accent" />
                                    <a href="mailto:mauriciodelamaza70@gmail.com" className="text-lg hover:text-accent transition-colors">mauriciodelamaza70@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="h-6 w-6 text-accent" />
                                    <p className="text-lg">Monterrey, México</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-headline text-2xl font-bold mb-4">Síguenos</h3>
                                <div className="flex space-x-4">
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

                        {/* Contact Form */}
                        <div className="bg-secondary p-8 rounded-lg">
                            <h3 className="font-headline text-3xl font-bold mb-6">Envíanos un mensaje</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
