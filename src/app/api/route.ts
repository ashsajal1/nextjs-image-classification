import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  console.log(formData.get("image"));
  async function query(filename: string) {
    const data = fs.readFileSync(filename);
    const response = await fetch(
      process.env.HUGGING_FACE_MODEL as string,
      {
        headers: { Authorization: process.env.HUGGING_FACE_KEY as string },
        method: "POST",
        body: data,
      }
    );
    const result = await response.json();
    return result;
  }

  //   const result = await query("cats.jpg");
  return NextResponse.json({
    ok: true,
  });
}
