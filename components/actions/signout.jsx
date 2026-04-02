"use server";

import { signOut } from "better-auth/api";

// import { signOut } from "@/auth";

export async function serverSignOut() {
  await signOut();
}