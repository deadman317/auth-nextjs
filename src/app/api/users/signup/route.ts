import connect from "@/DB/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqBody = await request.json();

    console.log(reqBody);
    const { username, email, password } = reqBody;

    //check if user already exists
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) {
      console.log(user);
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        message: "User created successfully",
        savedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
``;
