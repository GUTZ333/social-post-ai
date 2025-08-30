// Biblioteca para envio de e-mail real para envios de e-mails robustos, implementada de forma fácil e simples

import { envs } from "@/schemas/envs-schema";
import { Resend } from "resend";

const resend = new Resend(envs.RESEND_API_KEY);

export { resend };