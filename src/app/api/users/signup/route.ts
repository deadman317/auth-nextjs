import { connect } from "@/DB/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { username, email, password } = reqBody;
  console.log(reqBody);
  // try {
  //   const reqBody = await request.json();
  //   const { username, email, password } = reqBody;
  //   console.log(reqBody);

  //   //check if user exists with same email or username
  //   const user = await User.findOne({ email });
  //   if (user) {
  //     return NextResponse.json({ message: "User already exists", status: 400 });
  //   }

  //   //hash password
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(password, salt);

  //   //create user
  //   const newUser = new User({
  //     username,
  //     email,
  //     password: hashedPassword,
  //   });

  //   //save user
  //   const savedUser = await newUser.save();

  //   return NextResponse.json({
  //     message: "User created successfully",
  //     success: true,
  //     status: 201,
  //     savedUser,
  //   });
  // } catch (err: any) {
  //   return NextResponse.json({
  //     message: err.message,
  //     success: false,
  //     status: 500,
  //   });
  // }
}
