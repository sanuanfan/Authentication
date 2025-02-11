import { connect } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
import User from '@/models/userModel';
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { log } from "console";

connect()

export async function POST(request: NextRequest) {
    try {
        const reBody = await request.json();
        const { username, email, password } = reBody;
        console.log(reBody);

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "Email already registered" },
                { status: 400 }
            )
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();
        console.log("Saved user" + savedUser);

        return NextResponse.json({
            message: "USer Created successfully",
            status: 200,
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}