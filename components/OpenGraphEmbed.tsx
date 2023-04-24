import { Head } from "aleph/react"

export interface IEmbed {
	title?: string
	description?: string
	url?: string | undefined
	image?: string
}

export default function Embed(props: IEmbed) {
	const ROOT = "https://raptorfx.deno.dev"
	props.title = props.title ??
		"RaptorFX | A Modern-Denofied Solution to Building Apps!"
	props.description = props.description ??
		"Welcome to RaptorFX, the Modern App development tool using Web Technologies!"
	props.url = props.url ?? ROOT
	props.image = props.image ?? `${ROOT}/assets/logo.png`

	return (
		<Head>
			<title>{props.title}</title>
			<meta
				name="description"
				content={props.description}
			/>

			<meta property="og:url" content={props.url} />
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content={props.title}
			/>
			<meta
				property="og:description"
				content={props.description}
			/>
			<meta
				property="og:image"
				content={props.image}
			/>
			<meta name="theme-color" content="#FFFFFF" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="quickstayrooms.com" />
			<meta property="twitter:url" content={props.url} />
			<meta
				name="twitter:title"
				content={props.title}
			/>
			<meta
				name="twitter:description"
				content={props.description}
			/>
			<meta
				name="twitter:image"
				content={props.image}
			/>
		</Head>
	)
}
