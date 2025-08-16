import { envs } from "@/schemas/envs-schema";
import { Resend } from "resend";

const resend = new Resend(envs.RESEND_API_KEY);

export { resend };