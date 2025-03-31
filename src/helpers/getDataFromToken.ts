import { NextRequest } from "next/server";
import jwt  from "jsonwebtoken";


export const getDataFromToken = (request: NextRequest) => {
    try {
        
        const encodedToken = request.cookies.get("token")?.value || "";
        console.log(encodedToken)
        const decodedToken = jwt.verify(encodedToken, process.env.TOKEN_SECRET!) as { id: string, username: string, email: string };
        console.log(decodedToken)
        return decodedToken.id;

    } catch (error: any) {
        console.log("Error while extracting data from token", error.message)
        throw new Error("Invalid or missing token");
    }
}