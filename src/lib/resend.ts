// Biblioteca para envio de e-mail real para envios de e-mails robustos, implementada de forma fácil e simples
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY as string);

export { resend };