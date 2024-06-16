import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {MongoDBAdapter} from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongoClient"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
      callbackUrl: false,
    }),
  ],
})
