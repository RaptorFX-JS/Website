import { Head } from "aleph/react"

export interface IEmbed {
	title?: string
	description?: string
	image?: string
}

export default function Embed(embed: IEmbed) {
	return (
		<Head>
			<title>
				{embed.title ??
					"RaptorFX | A Modern-Denofied Solution to Building Apps!"}
			</title>
			<meta
				name="description"
				content={
					embed.description ??
					"Welcome to RaptorFX, the modern app development tool."
				}
			/>
			<meta
				property="og:title"
				content={
					embed.title ??
					"RaptorFX | A Modern-Denofied Solution to Building Apps!"
				}
			/>
			<meta
				property="og:description"
				content={embed.description ?? "Welcome to RaptorFX Website!"}
			/>
			<meta
				property="og:image"
				content={
					embed.image ?? "https://raptorfx.deno.dev/assets/logo.png"
				}
			/>
			<meta property="og:url" content="https://raptorfx.deno.dev/" />
			<meta name="theme-color" content="#FFFFFF" />		
		</Head>
	)
}
