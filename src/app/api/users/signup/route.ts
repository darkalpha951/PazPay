import {connect} from '@/dbconfig/dbConfig';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(request: NextRequest) {
    console.log("Connecting to MongoDB...");
    await connect();
    console.log("Connected to MongoDB");
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        console.log(reqBody)

        // Check if user already exists

        const user = await User.findOne({email})
        if(user) {
            return NextResponse.json({message: 'User already exists'}, {status: 400})
        }

        // Hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        })

        const savedUser = await newUser.save();
        console.log(savedUser)

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            savedUser
        })


    } catch (error: any) {
        return NextResponse.json({error: error}, {status: 500})
    }
}