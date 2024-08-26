'use server'
import dbConnect from "@/lib/db"
import User from "@/models/User"
import { NextResponse } from "next/server"



const addUser = async (user) => {
    const name = user.get('name')
    const zipCode = user.get('zipCode')
    const password = user.get('password')
    const theme = user.get('theme')

    const newUser = new User({name, zipCode, password, theme})
    
    console.log(newUser)

    try{ 

    return newUser.save()

}catch(error) {
    console.error('Error Saving')
    throw error
}
}

const findUser = async (user) =>{

    const name = user.get('name')
    const password = user.get('password')

    if(!name || !password) {
        throw new Error("Name or Password is undefined")
    }

    const myUser = await User.findOne( {name: name, password: password})
    if (!myUser) {
        console.log('User Not Found. Please Sign up')
    }
    console.log(myUser)
    
 return myUser
  
}


export { addUser, findUser }