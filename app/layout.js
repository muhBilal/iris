import {Inter} from "next/font/google";
import "./tailwind.css";
import "./css/style.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Iris Future Forge",
    description: "Generated by create next app",
};


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            {/*styles*/}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet"/>
            <script src="https://cdn.tailwindcss.com"></script>
            {/*font family*/}
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"/>
            {/*script*/}
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
            {/*aos*/}
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </head>
        <body className={`${inter.className}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
