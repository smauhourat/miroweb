import { Geist, Geist_Mono, Open_Sans, Inter } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap'
})

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})