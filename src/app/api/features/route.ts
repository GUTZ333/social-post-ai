import { features } from "@/db/mongo";
import { NextResponse as response } from "next/server";

export async function GET() {
  try {
    const tools = await features.find()
    return response.json({
      tools
    })
  }
  catch(err) {

  }
}