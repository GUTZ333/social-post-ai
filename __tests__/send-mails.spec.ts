import { resend } from "@/lib/resend";
import { envs } from "@/schemas/envs-schema";

describe("Connection Resend", () => {
  test("sending e-mail", async () => {
    await expect(
      resend.emails.send({
        from: envs.RESEND_FROM,
        to: "natashabondaczuk@gmail.com",
        subject: "E-mail para a Natasha",
        html: "E-mail envio para a <strong>Natasha Bondaczuk</strong>",
      })
    ).resolves.not.toThrow()
  }, 3000)
});