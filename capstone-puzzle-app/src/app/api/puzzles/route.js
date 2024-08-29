
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

        const puzzle = await Puzzle.findOne({ number: number });
        const count = await Puzzle.countDocuments();
        

         if (!puzzle) {
            return new Response(JSON.stringify({error: 'puzzle not found'}), {status: 404})
         };
         console.log(puzzle, count)
        
         return new Response(JSON.stringify({riddle: puzzle.riddle, answer: puzzle.answer, count: count}), {status: 200})
         
    } catch (error) {
            return new Response(JSON.stringify({error: 'error retrieving '+ error}))
        }
};

export async function POST(req , res) {

    await dbConnect();
 
        try {
        
        const { number, riddle, answer} = await req.json()
    
        const newPuzzle = new Puzzle({number, riddle, answer});
        
        await newPuzzle.save()
        console.log(newPuzzle)
        return new Response(JSON.stringify({message:'Puzzle created successfully!'}), {status: 201})
    
        } catch (error){
            return new Response(JSON.stringify({ error: 'Error creating user' }), {
                status: 500,
        })}
    }

    async function getPuzzleCount() {


        try {
          const count = await Puzzle.countDocuments();
      
          console.log(`Total documents: ${count}`);
          return(count)
        } catch (error) {
          console.error('Error counting documents:', error);
        }
      } 
