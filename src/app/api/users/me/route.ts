import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import connect from "@/DB/dbConfig";

export async function GET(request: NextRequest) {
  try {
    await connect();
    const id = await getDataFromToken(request);
    const user = await User.findOne({ _id: id }).select("-password");
    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
