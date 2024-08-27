import { GET } from "@/app/api/puzzles/route";

const id = 1;

export default async function PuzzleData() {
    const request = new Request(`http://localhost:3000/api/puzzles?id=${id}`)
    const cardInfo = await GET(request);
    console. log('component fetching successful')
    console.log(cardInfo)
    return JSON.stringify(cardInfo)
}