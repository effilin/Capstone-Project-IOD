

export default async function getPuzzle() {
    const res = await fetch('http://localhost:3000/api/puzzle')
    if (!res.ok) throw new Error('failed to fetch Puzzle')
        return res.json
}