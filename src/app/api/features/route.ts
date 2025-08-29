import { featuresModel } from "@/db/mongo";
import { NextResponse as response } from "next/server";

export async function GET() {
  try {
    const tools = await featuresModel.find()
    return response.json({
      tools
    }, {
      status: 200
    })
  }
  catch (err) {
    return response.json({
      err
    }, {
      status: 500
    })
  }
}