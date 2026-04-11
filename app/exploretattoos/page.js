import WorksMenu from '@/components/modals/WorksMenu';
import TattooTopBar from '@/components/navbar/TattooTopBar';
import Image from 'next/image'
import React from 'react'


export const metadata = {
    title: "TATTOOMI | Explore Unique Tattoo Designs & Artist Portfolios",
    description: "Discover a curated collection of unique tattoo designs and artist portfolios at TATTOOMI. Find your next favorite piece and connect with India's top tattoo artists.",
    keywords: ["tattoo studio", "best tattoo artist India", "custom tattoo designs", "tattoo shop", "ink artist", "permanent tattoos", "portrait tattoos", "minimalist tattoos", "tattoo consultation", "tattoomi", "professional tattooing", "tattoo portfolio", "tattoo marketplace", "ink studio"],
    authors: [{ name: "Vishal RajDeep" }],
    creator: "Vishal RajDeep",
    publisher: "Vishal RajDeep",
    metadataBase: new URL("https://tattoomi.in/exploretattoos"),

    openGraph: {
        title: "TATTOOMI | Explore Unique Tattoo Designs & Artist Portfolios",
        description: "Discover a curated collection of unique tattoo designs and artist portfolios at TATTOOMI. Find your next favorite piece and connect with India's top tattoo artists.",
        url: "https://tattoomi.in/exploretattoos",
        siteName: "TATTOOMI",
        images: [
            {
                url: "/1.jpeg",
                width: 1200,
                height: 630,
                alt: "TATTOOMI Tattoo Studio Art",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "TATTOOMI | Explore Unique Tattoo Designs & Artist Portfolios",
        description: "Discover a curated collection of unique tattoo designs and artist portfolios at TATTOOMI. Find your next favorite piece and connect with India's top tattoo artists.",
        images: ["/1.jpeg"],
        creator: "@RajDeepSolution",
    },
};

export default function ExploreTattoos() {
    
    const images = [1, 2, 3];

    return (
        <>
            <TattooTopBar />
            <div className="relative w-svw sm:w-screen p-1 my-2 z-0">
                <div className="relative w-full shadow-inner shadow-stone-500 rounded-3xl px-2 py-4 overflow-x-hidden columns-2 lg:columns-3 xl:columns-5 2xl:columns-7 gap-2">
                    {images.map((num) => (
                        <div
                            key={num}
                            className="relative flex justify-center items-center shadow shadow-stone-500 rounded-xl overflow-x-hidden mb-4"
                        >
                            <Image
                                width={720}
                                height={720}
                                src={`/${num}.jpeg`}
                                priority
                                alt={`Decorative Image ${num}`}
                                className="rounded-xl"
                            />
                            <WorksMenu />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
