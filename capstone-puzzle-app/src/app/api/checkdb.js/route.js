import { dbConnect } from "@/lib/db";
import { NextResponse } from "next/server";

export async function Get() {
    const conn = await dbConnect();
    return new NextResponse('connected')
}