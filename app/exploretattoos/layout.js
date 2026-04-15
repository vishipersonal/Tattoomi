
export const metadata = {
    title: "TATTOOMI | Explore Unique Tattoo Designs & Artist Portfolios",
    description: "Discover a curated collection of unique tattoo designs and artist portfolios at TATTOOMI. Find your next favorite piece and connect with India's top tattoo artists.",
    keywords: ["tattoo studio", "best tattoo artist India", "custom tattoo designs", "tattoo shop", "ink artist", "permanent tattoos", "portrait tattoos", "minimalist tattoos", "tattoo consultation", "tattoomi", "professional tattooing", "tattoo portfolio", "tattoo marketplace", "ink studio"],
    authors: [{ name: "Vishal RajDeep" }],
    creator: "Vishal RajDeep",
    publisher: "Vishal RajDeep",
    metadataBase: new URL("https://tattoomi.in"),

    openGraph: {
        title: "TATTOOMI | Explore Unique Tattoo Designs & Artist Portfolios",
        description: "Discover a curated collection of unique tattoo designs and artist portfolios at TATTOOMI. Find your next favorite piece and connect with India's top tattoo artists.",
        url: "https://tattoomi.in",
        siteName: "TATTOOMI",
        images: [
            {
                url: "/Logo.jpg",
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
        images: ["/Logo.jpg"],
        creator: "@RajDeepSolution",
    },
};

export default function Layout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
