import clientPromise from "../lib/mongodb"
import { redirect } from "next/navigation"
export default async function Page({ params }) {
  const shorturl = (await params).shorturl
  const client = await clientPromise
  const db = client.db("zaplink")
  const collection = db.collection("url")
  const url = await collection.findOne({ shorturl: shorturl })
  if (url) {
    redirect(url.url);
  }
  else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }

}