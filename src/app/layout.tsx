import { Metadata } from "next"
import { Inter } from "next/font/google"

import Navbar from "@/components/layout/nav/navbar/navbar"

import "./globals.scss"
import { LikesProvider } from "@/context/likes-context"

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
			<body className={inter.className}>
				<div className="pb-12 md:pt-20">
					<Navbar></Navbar>
					<div className="py-5 md:px-5 md:py-7 flex justify-center">
						<LikesProvider>
							<main className="w-full max-w-lg">{children}</main>
						</LikesProvider>
					</div>
				</div>
			</body>
		</html>
	)
}
