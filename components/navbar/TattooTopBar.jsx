"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const TattooTopBar = ({ query, setQuery }) => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (query.startsWith("@")) {
      // remove spaces & redirect to /@username
      const username = query.replace(/\s+/g, "");
      router.push(`/${username}`);
    } else {
      // normal search -> just update query state (feeds API will handle it)
      setQuery(query);
    }
  };

  return (
    <div className={`fixed top-0 z-20 w-svw sm:w-screen transition-all duration-300 ease-in ${scrollingDown ? "-translate-y-[125%]" : "translate-y-0"}`}>
      <form
        onSubmit={handleSearch}
        className="relative flex items-center justify-center backdrop-blur-xl shadow shadow-stone-800 rounded-4xl px-3 py-2 my-2 mx-auto max-w-sm w-10/12"
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Search tattoos or @artists..."
          className="transition-all duration-300 shadow-inner shadow-stone-800 ease-in origin-left text-lg rounded-2xl outline-none w-full px-2.5 mr-1"
        />
        <button
          type="submit"
          aria-label="Search"
          className="relative text-2xl rounded-2xl"
        >
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default TattooTopBar;