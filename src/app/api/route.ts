import { NextRequest } from "next/server";
import fs from "fs";

export async function POST(req: NextRequest) {
  const { filename } = await req.json();
  async function query(filename: string) {
    const data = fs.readFileSync(filename);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
      {
        headers: { Authorization: process.env.HUGGING_FACE_KEY as string },
        method: "POST",
        body: data,
      }
    );
    const result = await response.json();
    return result;
  }

  const result = await query("cats.jpg");
  Response.json({
    result,
  });
}
