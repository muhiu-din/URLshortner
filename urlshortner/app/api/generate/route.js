import clientPromise from "@/app/lib/mongodb"

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db('zaplink');
    const collection = db.collection('url');

    const body = await request.json();
    const doc = await collection.findOne({shorturl: body.shorturl});
    if(doc){
    return Response.json({success:false, error: true, message: 'URL already exists' })
    }
   const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    });
  return Response.json({success:true, error: false, message: 'URL shortened successfully', data: result, shorturl: body.shorturl })
}