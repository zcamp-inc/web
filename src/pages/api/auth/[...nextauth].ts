import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
    providers: [
        Auth0Provider({
            clientId: "kBckK2R7lscUT7c4xtTbBceeR6ZeObVz",
            clientSecret: "ahbiynZyNJyWRiQ43hEfqX1gHQ07V9R3ytJI4Hs7hWBiyIXBQO4gJwb-_BkCQ_do",
            issuer: "https://zcamp-inc.us.auth0.com",
        }),
    ],

    callbacks: {
        async jwt({ token }){
            token.userRole = "camper"
            return token
        },
    },
})