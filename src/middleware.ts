export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/profile/:path*",
    "/messages/:path*",
    "/chat-gpt/:path*",
    "/settings/:path*",
  ],
};
