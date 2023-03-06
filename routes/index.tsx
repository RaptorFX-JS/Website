import Hero from "~/components/Hero.tsx"
import Feature, { IFeatures } from "~/components/Feature.tsx"
import Embed from "~/components/OpenGraphEmbed.tsx"

const features: IFeatures[] = [
	{
		title: "Web Standards",
		description:
			"Based on Web Standards and Technologies, RaptorFX can use many modern APIs like fetch and Web Push.",
		icon: "web",
		alt: "Pixel Art of the Globe"
	},
	{
		title: "Cross-Platform",
		description:
			"RaptorFX is built to run on all 5 major operating systems; Windows, Mac, Linux, Android, and iOS.",
		icon: "cross",
		alt: "Pixel Art of Generic Monitor with Phone"
	},
	{
		title: "Open Source",
		description:
			"Built upon and as open source, RaptorFX is licensed under the MIT License, meaning you can use it for free!",
		icon: "open",
		alt: "Pixel Art of OSI Logo / Open Source Icon"
	},
	{
		title: "Deno-Powered",
		description:
			"Powered by Deno, RaptorFX is built to be as efficient as possible, including being fast, secure, and reliable.",
		icon: "deno",
		alt: "Pixel Art of the Deno Logo"
	}
]

export default function Index() {
	return (
		<>
			<Embed />
			<Hero />
			<section className="p-2">
				<div className="text-center">
					<h1>Cross-Platform Apps made Easy~!</h1>
					<p className="m-0">RaptorFX makes the hard parts easy so you can focus on delivering!</p>
				</div>
				<h1 className="border-2 border-solid border-[grey] text-center mt-4 mb-4">Features</h1>
				<div className="grid grid-cols-1 touch-grid-cols-2 lg:grid-cols-4 gap-4">
					{features.map((feature) => (
						<Feature key={feature.title} {...feature} />
					))}
				</div>
			</section>
		</>
	)
}
