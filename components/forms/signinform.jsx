"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { SignOutButton } from '../ui/signoutbutton';
// import { database } from "@/firebaseConfig";
// import { ref, onValue, update, query, orderByChild, equalTo, get } from "firebase/database";
// import bcrypt from "bcryptjs";

export default function SignInForm({ setIsVisible, isLoggedIn, isAdmin, session }) {
  const closeForm = () => setIsVisible(false);

  const userImage = session?.user?.image;
  const userName = session?.user?.name;

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [firebaseLoggedIn, setFirebaseLoggedIn] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("employeeToken");
    if (!storedToken) return;

    const empRef = ref(database, "employees");

    onValue(empRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      for (const emp of Object.values(data)) {
        if (emp.token === storedToken) {
          setFirebaseLoggedIn(true);
          setFirebaseUser(emp);
          break;
        }
      }
    }, { onlyOnce: true });
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const q = query(ref(database, "employees"), orderByChild("id"), equalTo(userId));
      const snapshot = await get(q);

      if (!snapshot.exists()) return setError("Invalid credentials");

      let matchedKey = null;
      let matchedUser = null;

      snapshot.forEach((childSnap) => {
        const emp = childSnap.val();
        const empKey = childSnap.key;

        if (bcrypt.compareSync(password, emp.password)) {
          matchedKey = empKey;
          matchedUser = emp;
        }
      });

      if (!matchedKey) return setError("Invalid credentials");

      const token = Math.random().toString(36).substring(2, 15);
      const now = new Date().toISOString();

      await update(ref(database, `employees/${matchedKey}`), {
        token,
        lastLogin: now
      });

      localStorage.setItem("employeeToken", token);
      setFirebaseLoggedIn(true);
      setFirebaseUser({ ...matchedUser, token, lastLogin: now });
      setIsVisible(false);

    } catch (err) {
      console.error("Firebase Login Error:", err);
      setError("Something went wrong.");
    }
  };

  const handleFirebaseLogout = async () => {
    const storedToken = localStorage.getItem("employeeToken");
    if (!storedToken) return;

    const empRef = ref(database, "employees");
    onValue(empRef, async (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      let logoutKey = null;

      for (const [key, emp] of Object.entries(data)) {
        if (emp.token === storedToken) {
          logoutKey = key;
          break;
        }
      }

      if (!logoutKey) return;

      await update(ref(database, `employees/${logoutKey}`), {
        token: "",
        lastLogin: ""
      });

      localStorage.removeItem("employeeToken");
      setFirebaseLoggedIn(false);
      setFirebaseUser(null);
    }, { onlyOnce: true });
  };

  return (
    <>
      {firebaseLoggedIn ? (
        <form className="absolute sm:w-[15vw] w-[60vw] top-[6vh] border shadow text-sm text-stone-900 rounded-2xl p-5 signInFormBackGround -right-10 flex flex-col justify-center items-center gap-2 TopToBottom">
          <button className='absolute top-2 right-2 p-1 rounded-xl transition-all ease hover:scale-110 hover:text-stone-50' onClick={closeForm} title='Close Form' >
            <GiCrossMark />
          </button>
          <Image width={150} height={150} src={firebaseUser?.userPic || "/userplaceholder.png"} alt="User Image" className='rounded-full' />
          <p className='shadow px-2 py-1 outline-none signInFormInputBackGround rounded-xl'>
            {firebaseUser?.userName || "User Name"}
          </p>
          <button
            type="button"
            onClick={handleFirebaseLogout}
            className='transition-all ease hover:scale-105 text-stone-200 shadow-lg hover:text-stone-950 hover:bg-indigo-200 bg-indigo-700 px-4 rounded-xl'
          >
            Log Out
          </button>
        </form>
      ) : isLoggedIn ? (
        <form className="absolute sm:w-[15vw] w-[60vw] top-[6vh] border shadow text-sm text-stone-900 rounded-2xl p-5 signInFormBackGround -right-10 flex flex-col justify-center items-center gap-2 TopToBottom">
          <button className='absolute top-2 right-2 p-1 rounded-xl transition-all ease hover:scale-110 hover:text-stone-50' onClick={closeForm} title='Close Form' >
            <GiCrossMark />
          </button>
          <Image width={150} height={150} src={userImage || "/userplaceholder.png"} alt="User Image" className='rounded-full' />
          <p className='shadow px-2 py-1 outline-none signInFormInputBackGround rounded-xl'>
            {userName || "User Name"}
          </p>
          <SignOutButton />
        </form>
      ) : (
        <form onSubmit={handleSignIn} className="absolute top-[6vh] border shadow text-sm text-stone-900 rounded-2xl p-5 signInFormBackGround -right-10 flex flex-col justify-center items-center gap-2 TopToBottom">
          <button
            className='absolute top-2 right-2 p-1 rounded-xl transition-all ease hover:scale-110 hover:text-stone-50'
            onClick={closeForm}
            title='Close Form'
          >
            <GiCrossMark />
          </button>
          <Image width={150} height={150} src="/userplaceholder.png" alt="User Image" className='rounded-full' />
          <input
            type="text"
            name="UserName"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder='Enter Your ID'
            className='shadow px-2 py-1 outline-none focus:ring ring-cyan-950 signInFormInputBackGround rounded-xl'
          />
          <input
            type="password"
            name="PassWord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            className='shadow px-2 py-1 outline-none focus:ring ring-cyan-950 signInFormInputBackGround rounded-xl'
          />
          {error && <p className="text-red-600 text-xs">{error}</p>}
          <button
            type="submit"
            className='transition-all ease hover:scale-105 text-stone-200 shadow-lg hover:text-stone-950 hover:bg-indigo-200 bg-indigo-700 px-4 rounded-xl'
          >
            Sign In
          </button>
        </form>
      )}
    </>
  );
}