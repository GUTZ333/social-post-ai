import { resend } from "@/lib/resend";

describe("Connection Resend", () => {
  test("sending e-mail", async () => {
    await expect(
      resend.emails.send({
        from: process.env.NEXT_PUBLIC_RESEND_FROM as string,
        to: "natashabondaczuk@gmail.com",
        subject: "E-mail para a Natasha",
        html: "E-mail envio para a <strong>Natasha Bondaczuk</strong>",
      })
    ).resolves.not.toThrow()
  }, 3000)
});