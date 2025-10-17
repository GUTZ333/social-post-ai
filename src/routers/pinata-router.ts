import { pinata } from "@/lib/pinata";
import { procedure, router } from "@/lib/trpc";
import { z } from "zod";

export const pinataRouter = router({
  uploadImage: procedure
    .input(
      z.object({
        fileName: z.string(),
        fileType: z.string(),
        fileBase64: z.string()
      })
    )
    .output(
      z.string().nullable().optional()
    )
    .mutation(async ({ input: { fileBase64, fileName, fileType } }) => {
      const buffer = Buffer.from(fileBase64, "base64")
      const blob = new Blob([buffer], { type: fileType })
      const file = new File([blob], fileName, { type: fileType })

      const { cid } = await pinata.upload.public.file(file)
      return await pinata.gateways.public.convert(cid)
    }),
  unpinImage: procedure
    .input(z.object({
      cid: z.string()
    }))
    .mutation(async ({ input: { cid } }) => {
      await pinata.files.public.delete([cid])
    })
})