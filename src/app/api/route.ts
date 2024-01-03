import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  async function query(image: File) {
    const response = await fetch(process.env.HUGGING_FACE_MODEL as string, {
      headers: {
        Authorization: process.env.HUGGING_FACE_KEY as string,
      },
      method: "POST",
      body: image,
    });

    const result = await response.json();
    return result;
  }

  try {
    const formData = await req.formData();
    // console.log(formData.get("image"));
    const image = formData.get("image");
    // console.log(image?.name);

    if (!image) {
      console.log("no image found");
      return NextResponse.json(
        {
          ok: false,
          error: "Image is required.",
        },
        { status: 400 }
      );
    }

    const result = await query(image as File);

    // console.log(result);

    return NextResponse.json({
      ok: true,
      result,
    });
  } catch (error) {
    console.log("first");
    return NextResponse.json(
      {
        ok: false,
        error,
        // message: "Error occured",
      },
      { status: 400 }
    );
  }
}
