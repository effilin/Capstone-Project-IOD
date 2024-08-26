
import dbConnect from "@/lib/db";
import Puzzle from "@/models/Puzzle";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    console.log('connected from GetPuzzle')
    const puzzleRes = await Puzzle.find()
    return NextResponse.json({puzzleRes})
    
}