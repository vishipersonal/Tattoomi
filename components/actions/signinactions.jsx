// cottonfall/components/actions/signin.jsx
"use server";
import { signIn, signOut } from "@/auth";

export async function serverSignInGoogle() {
  return signIn("google");
}

export async function serverSignInFacebook() {
  return signIn("facebook");
}

export async function serverSignInInstagram() {
  return signIn("instagram");
}

export async function serverSignOut() {
  return signOut({ redirectTo: "/" });
}