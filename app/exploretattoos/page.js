"use client";
import TattooTopBar from '@/components/navbar/TattooTopBar';
import Image from 'next/image'
import Link from "next/link";
import React, { useState} from "react";
// import React, { useEffect, useState, useCallback } from "react";
// import { database } from "@/firebaseConfig";
// import { ref, get } from "firebase/database";

const staticImages = [
    { id: "1", imageUrl: "/1.jpeg", username: "artist1" },
    { id: "2", imageUrl: "/2.jpeg", username: "artist2" },
    { id: "3", imageUrl: "/3.jpeg", username: "artist3" },
    { id: "4", imageUrl: "/custom.png", username: "artist4" },
    { id: "5", imageUrl: "/fineline.png", username: "artist5" },
    { id: "6", imageUrl: "/neo.png", username: "artist6" },
    { id: "7", imageUrl: "/realism.png", username: "artist7" },
];

// 🔹 normalize post structure
// const normalizePosts = (data) => {
//   const posts = [];
//   for (const [username, userPosts] of Object.entries(data || {})) {
//     for (const [postId, post] of Object.entries(userPosts)) {
//       posts.push({ id: postId, username, ...post });
//     }
//   }
//   return posts;
// };

// const filterAndSortPosts = (posts, query) => {
//   let result = posts;

//   // 🔍 Search filter
//   if (query) {
//     const q = query.toLowerCase().trim();
//     result = result.filter((post) => {
//       const title = (post.title || "").toLowerCase();
//       const description = (post.description || "").toLowerCase();
//       const tags = Array.isArray(post.tags)
//         ? post.tags.map((t) => t.toLowerCase())
//         : [];
//       return (
//         title.includes(q) ||
//         description.includes(q) ||
//         tags.some((tag) => tag.includes(q))
//       );
//     });
//   }

// 🔥 Sort rule
//   return result.sort((a, b) => {
//     const likesA = Array.isArray(a.likedBy) ? a.likedBy.length : 0;
//     const likesB = Array.isArray(b.likedBy) ? b.likedBy.length : 0;

//     if (likesB !== likesA) {
// pehle jada likes wale
//   return likesB - likesA;
// }

// agar likes equal ya 0 hain → latest first
//     return new Date(b.createdat) - new Date(a.createdat);
//   });
// };


export default function ExploreTattoos() {
    // const [images, setImages] = useState([]);
    // const [offset, setOffset] = useState(0);
    const [query, setQuery] = useState("");
    // const limit = 20;

    const filteredImages = staticImages.filter((img) =>
        img.username.toLowerCase().includes(query.toLowerCase())
    );

    // const fetchImages = useCallback(
    //     async (reset = false) => {
    //         try {
    //             const snapshot = await get(ref(database, "artistPosts"));
    //             const posts = normalizePosts(snapshot.exists() ? snapshot.val() : {});
    //             const filteredPosts = filterAndSortPosts(posts, query);

    //             const paginated = filteredPosts.slice(
    //                 reset ? 0 : offset,
    //                 (reset ? 0 : offset) + limit
    //             );

    //             setImages((prev) => {
    //                 if (reset) return paginated;
    //                 const existingKeys = new Set(prev.map((p) => `${p.username}-${p.id}`));
    //                 const newPosts = paginated.filter(
    //                     (p) => !existingKeys.has(`${p.username}-${p.id}`)
    //                 );
    //                 return [...prev, ...newPosts];
    //             });

    //             setOffset((prev) => (reset ? limit : prev + limit));
    //         } catch (error) {
    //             console.error("Firebase fetch error:", error);
    //         }
    //     },
    //     [query, offset, limit]
    // );

    // useEffect(() => {
    //     fetchImages(true);
    // }, [query, fetchImages]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (
    //             window.innerHeight + window.scrollY >=
    //             document.body.offsetHeight - 500
    //         ) {
    //             fetchImages();
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [fetchImages]);

    return (
        <>
            <TattooTopBar query={query} setQuery={setQuery} />
            <div className="relative w-svw sm:w-screen columns-2 lg:columns-3 xl:columns-5 2xl:columns-6 gap-2 px-4 pt-[2vh] mt-16 pb-[10vh] z-0">
                {filteredImages.map(({ id, imageUrl, username }, index) => (
                    <div
                        key={`${username}-${id}`}
                        className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
                    >
                        {/* <Link href={`/work/${id}`} scroll={false}> */}
                        <Link href={`/`} scroll={false}>
                            <Image
                                src={imageUrl}
                                alt={`Post by ${username}`}
                                width={720}
                                height={720}
                                priority={index < 3}
                                className="object-cover w-full h-auto"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
