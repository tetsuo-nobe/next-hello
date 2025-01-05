export async function POST(request) {  
    const reqBody = await request.json()  
    const name = reqBody.yourname
    const msg = `こんにちは！ ${name}`  
    return Response.json({ message: msg })
}
