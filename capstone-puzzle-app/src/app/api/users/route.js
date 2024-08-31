'use server'
import dbConnect from "@/lib/db"
import User from "@/models/User"
import { NextResponse } from "next/server"


export async function POST(req , res) {

    await dbConnect();
 
        try {
        
        const { name, zipCode, theme} = await req.json()
    
        const newUser = new User({name, zipCode, theme});
    
        await newUser.save()
        console.log(newUser)
        return new Response(JSON.stringify({message:'User created successfully!'}), {status: 201})
    
        } catch (error){
            return new Response(JSON.stringify({ error: 'Error creating user' }), {
                status: 500,
        })}
    }

export async function GET(request) {
    
    try {
        console.log(request.nextUrl.searchParams)
        const searchParams = request.nextUrl.searchParams
       
        const name= searchParams.get('name')
        const zipCode = searchParams.get('zipCode')
        console.log( `decompose searchParams.get('name'): ${name}, decompose request.nextUrl.searchParams.get('zipcode'): ${zipCode}`)

        if(!name || !zipCode) {
            return new Response(JSON.stringify({error: 'name or zip code not received'}))
        };

        const user = await User.findOne({ name: name, zipCode: zipCode })

         if (!user) {
            return new Response(JSON.stringify({error: 'user not found'}), {status: 404})
         };
         console.log(user)
        
         return new Response(JSON.stringify({name: user.name, theme: user.theme, zipcode: user.zipCode}), {status: 200})
         
    } catch (error) {
            return new Response(JSON.stringify({error: 'error retrieving '+ error}))
        }
};

export async function DELETE(request) {
    
    try {
        console.log(request.nextUrl.searchParams)
        const searchParams = request.nextUrl.searchParams
       
        const name= searchParams.get('name')
        const zipCode = searchParams.get('zipCode')
        console.log( `decompose searchParams.get('name'): ${name}, decompose request.nextUrl.searchParams.get('zipcode'): ${zipCode}`)

        if(!name || !zipCode) {
            return new Response(JSON.stringify({error: 'name or zip code not received'}))
        };
        await User.deleteOne({ name: name, zipCode: zipCode })

         return new Response(JSON.stringify('deleted'), {status: 200})
    } catch (error) {
            return new Response(JSON.stringify({error: 'error retrieving '+ error}))
        }
};

export async function PUT(req, res) {
    
    try {
        console.log(req.nextUrl.searchParams)
        const searchParams = req.nextUrl.searchParams
       
        const newName= searchParams.get('name')
        const newZipCode = searchParams.get('zipCode')
        const newTheme = searchParams.get('theme')
        
        
        const { name, zipCode, theme} = await req.json()
    
        const updatedUser = await User.updateOne({name: name, zipCode: zipCode },
            {$set: {name: newName, zipCode: newZipCode, theme: newTheme}});

        console.log(updatedUser)
        return new Response(JSON.stringify({name: newName, zipCode: newZipCode, theme: newTheme}),
         {status: 201,
          headers:{'Content-Type': 'application/json'}
          })
    
        } catch (error){
            return new Response(JSON.stringify({ error: 'Error creating user' }), {
                status: 500,
        })}
    }
     
   
    


  


