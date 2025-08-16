import { resend } from "@/lib/resend";
import { envs } from "@/schemas/envs-schema";

describe("Connection Resend", () => {
  test("sending e-mail", async () => {
    await expect(
      resend.emails.send({
        from: envs.RESEND_FROM,
        to: "gutz333.lpsking32.jotavve18@hotmail.com",
        subject: "Test Mail Resend",
        html: "Teste de envio de e-mail com Resend",
      })
    ).resolves.not.toThrow()
  }, 4000)
  // test("sending e-mail with template React", async () => {
  //   const templateRender = await renderForgotPassword();
  //   await expect(resend.emails.send({
  //     from: envs.RESEND_FROM,
  //     to: "gutz333.lpsking32.jotavve18@hotmail.com",
  //     subject: "Test Mail Resend Template React",
  //     react: templateRender,
  //   })).resolves.not.toThrow();
  // }, 4000)
});