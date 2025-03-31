import {connect} from "@/dbconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    await connect();

    try {
        const userId = await getDataFromToken(request);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const user = await User.findOne({_id: userId}).select("-password");
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({
            message: "User Found",
            data: user,
        })

    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 400});
    }
}