import { pinata } from "@/lib/pinata";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData(); // pegando os dados do corpo da requisição vinda do formulário
    const file: File | null = data.get("file") as unknown as File // capiturando o campo de file do formulário
    const { cid } = await pinata.upload.public.file(file) // baixa a imagem no servidor da pinata retornando um id
    const url = await pinata.gateways.public.convert(cid) // convertendo o identificador da imagem para uma url pública
    await pinata.gateways.public.get(cid).optimizeImage({
      width: 500,
      height: 500,
      format: "webp"
    })
    return NextResponse.json(
      { url },
      { status: 201 }
    )
  }
  catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: `Interval server error: ${err} ` },
      { status: 500 }
    )
  }
}