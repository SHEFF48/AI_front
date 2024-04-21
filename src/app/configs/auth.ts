import type { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";

import { ZodError } from "zod";

import { signInSchema } from "@/lib/zod";
// TODO
// import { saltAndHashPassword } from "@/lib/utils/password";
// import { getUserFromDb } from "@/lib/utils/db";

const users = [
  {
    id: "0",
    name: "Ivan Ivanov",
    email: "test@test.com",
    password: "password",
  },
  {
    id: "2",
    name: "Peter Petrov",
    email: "test2@test.com",
    password: "password",
  },
  {
    id: "3",
    name: "Vasiliy Vasiliev",
    email: "test3@test.com",
    password: "password",
  },
];

// temporary function
const getCurrentUser = (credentials: any, users: any) => {
  if (!credentials?.email || !credentials?.password) return null;
  const currentUser = users?.find(
    (user: any) => user.email === credentials.email
  );
  if (currentUser && currentUser.password === credentials.password) {
    const { password, ...user } = currentUser;
    return user as User;
  }
};

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials): Promise<User | null> => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // TODO
          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password);

          // TODO
          // logic to verify if user exists
          // user = await getUserFromDb(email, pwHash);

          user = getCurrentUser(credentials, users);

          if (!user) {
            throw new Error("User not found.");
          }

          // return json object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/login" },
};
