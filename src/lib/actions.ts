
"use server";

import { z } from "zod";
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("El email no es válido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string(),
  message: z.string().min(10, "El mensaje es demasiado corto"),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Error de validación. Por favor, revise los campos.",
      success: false,
    };
  }

  const { name, email, phone, company, service, message } = validatedFields.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return {
      message: "El servicio de correo no está configurado. Por favor, intenta más tarde.",
      success: false,
    };
  }

  try {
    // Instanciación lazy: se crea el cliente solo al enviar, no al importar el módulo.
    // Así el prerender del build no falla cuando RESEND_API_KEY no está presente.
    const resend = new Resend(apiKey);

    // Envío del correo usando Resend
    // Nota: onboarding@resend.dev solo funciona para enviar correos a tu propia cuenta verificada.
    // Para producción, deberás verificar tu dominio en Resend.
    await resend.emails.send({
      from: 'Contacto Web <onboarding@resend.dev>',
      to: ['mauriciodelamaza70@gmail.com'],
      subject: `Nuevo mensaje de contacto: ${service}`,
      text: `
        Has recibido un nuevo mensaje desde el sitio web Terra Vision:

        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No proporcionado'}
        Empresa: ${company || 'No proporcionada'}
        Servicio de interés: ${service}

        Mensaje:
        ${message}
      `,
    });

    return {
      message: "¡Gracias por tu mensaje! El correo ha sido enviado correctamente.",
      success: true,
    };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return {
      message: "Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo más tarde.",
      success: false,
    };
  }
}
