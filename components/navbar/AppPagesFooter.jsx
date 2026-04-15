"use client";
import React, { useEffect, useState } from 'react'
import { CiChat2, CiShop, CiUser } from 'react-icons/ci';
import { GiCottonFlower } from 'react-icons/gi';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';

const pathToKey = { "/": "Home", "/user/userpage": "User", "/signin": "User", "/registration": "User", "/collection": "Collections", "/chat": "Chat" };

const buttonClass = "relative text-center shadow-stone-500 text-4xl p-0.5 rounded-xl transition-all duration-150 ease-in hover:scale-105 active:scale-95 active:shadow-inner"



const AppPagesFooter = ({ session }) => {   
    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState(null);
    const [scrollingDown, setScrollingDown] = useState(false);

    useEffect(() => {
        if (pathname) {
            const matchedKey = pathToKey[pathname] || null;
            setActiveIndex(matchedKey);
        }
    }, [pathname]);

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

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const buttonMeta = [
        { Icon: CiShop, label: "Home", title: "Home", key: "Home", href: "/" },
        { Icon: GiCottonFlower, label: "Collections", title: "Collections", key: "Collections", href: "/collection" },
        { Icon: CiChat2, label: "Chat", title: "Chat", key: "Chat", href: "/chat" },
        { Icon: CiUser, label: "User", title: "User", key: "User", href: `${session ? "/userpage" : "/signin"}` },
    ];

    return (
        <div className={`fixed bottom-0 left-0 w-svw sm:w-screen px-1 py-2 bg-[var(--background)] text-[var(--foreground)] z-0 rounded-t-2xl transition-all duration-300 ease-in ${scrollingDown ? "translate-y-[125%]" : "translate-y-0"}`}>
            <nav className='relative w-full sm:w-1/2 mx-auto shadow-inner shadow-stone-500 rounded-4xl py-2 px-4 overflow-x-hidden flex justify-around items-center gap-2 flex-nowrap'>
                {buttonMeta.map(({ Icon, label, title, key, href }) => (
                    <Link
                        key={key}
                        onClick={() => setActiveIndex(key)}
                        aria-label={label}
                        title={title}
                        href={href}
                        scroll={false}
                        className={`${buttonClass} ${activeIndex === key ? "shadow-inner" : "shadow"
                            }`}
                    >
                        <Icon />
                    </Link>
                ))
                }
            </nav>
        </div>
    )
}

export default AppPagesFooter