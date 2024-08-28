
import dbConnect from "@/lib/db";
import Puzzle from "@/models/Puzzle";
import { NextResponse } from "next/server";



export async function GET(request) {
    await dbConnect();
    try {
        console.log(request.nextUrl.searchParams)
        const searchParams = request.nextUrl.searchParams

        const number = searchParams.get('number')
        console.log( `decompose searchParams.get('number'): ${number}`)

        if(!number ) {
            return new Response(JSON.stringify({error: 'number not received'}))
        };

        const puzzle = await Puzzle.findOne({ number: number })

         if (!puzzle) {
            return new Response(JSON.stringify({error: 'puzzle not found'}), {status: 404})
         };
         console.log(puzzle)
        
         return new Response(JSON.stringify({riddle: puzzle.riddle, answer: puzzle.answer}), {status: 200})
         
    } catch (error) {
            return new Response(JSON.stringify({error: 'error retrieving '+ error}))
        }
};