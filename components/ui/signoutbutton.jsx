"use client";
import React from "react";
import { serverSignOut } from "../actions/signout";

export function SignOutButton() {
    return (
        <button
            formAction={serverSignOut}
            type="submit"
            className='transition-all ease hover:scale-105 text-stone-200 shadow-lg hover:text-stone-950 hover:bg-indigo-200 bg-indigo-700 px-4 rounded-xl'
        >
            Log Out
        </button>
    );
}