import {MongoClient} from "mongodb"
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

const clientPromise = client.connect()

export default clientPromise
