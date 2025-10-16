import { procedure, router } from './trpc';
import z from 'zod';

export const appRouter = router({
  helloWorld: procedure
    .query(() => {
      return "Hello World"
    }),
  uploadImage: procedure
    .input(
      z.object({
        fileName: z.string(),
        fileType: z.string(),
        fileBase64: z.string()
      })
    )
    // a requisição pode retornar uma string ou undefined ou null
    .output(z.string().nullable().optional())
    .mutation(async ({ input: { fileBase64, fileName, fileType } }) => {
      try {
        const buffer = Buffer.from(fileBase64, "base64")

        const formData = new FormData();
        formData.append("avatar", new Blob([buffer], { type: fileType }), fileName);

        const response = await fetch(`${process.env.NEXT_URL}/api/files`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text()
          console.error("Error route:", response.status, errorText);
          throw new Error(`Upload failed with status ${response.status}. Message: ${errorText.substring(0, 100)}...`);
        }

        const { url } = await response.json();
        return url;
      } catch (err) {
        console.error("Error upload:", err);
        return null;
      }
    })
});

// Export type router type signature,
// NOT the router itself.
export type typeAppRouter = typeof appRouter;