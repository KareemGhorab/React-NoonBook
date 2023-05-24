import { Metadata } from "next"
import { Inter } from "next/font/google"

import Navbar from "@/components/layout/nav/navbar"

import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: {
		template: "NoonBook | %s",
		absolute: "NoonBook",
	},
	description: "It's better than facebook :D",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className + " pb-12"}>
				<Navbar></Navbar>
				<div className="p-5 flex justify-center">
					<main className="w-full max-w-lg">{children}</main>
				</div>
			</body>
		</html>
	)
}
