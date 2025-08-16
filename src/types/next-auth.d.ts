import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      profile_id: string;
      profile_auth_username: string;
      profile_auth_mail: string;
      profile_avatar_url?: string | null;
      profile_birth_date: string;
      profile_created_at: string;
      profile_updated_at: string;
      profile_provider: string
    } & DefaultSession["user"];
  }

  interface User {
    profile_id: string;
    profile_auth_username: string;
    profile_auth_mail: string;
    profile_avatar_url?: string | null;
    profile_birth_date: string;
    profile_created_at: string;
    profile_updated_at: string;
    profile_provider: string
  }
}
