
import dbConnect from "@/lib/db";
import Puzzle from "@/models/Puzzle";
import { NextResponse } from "next/server";

export async function GET(request) {
    await dbConnect();
    console.log('connected from GetPuzzle')
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const puzzleRes = await Puzzle.find({id: id})
    console.log(puzzleRes)
    return JSON.stringify(puzzleRes)
    
}