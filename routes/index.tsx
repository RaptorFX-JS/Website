import Hero from "~/components/Hero.tsx"
import Feature, { IFeatures } from "~/components/Features.tsx"
import Embed from "~/components/OpenGraphEmbed.tsx"
import Standout from "~/components/StandoutHeading.tsx"

const features: IFeatures[] = [
	{
		title: "Web Standards",
		description:
			"Based on Web Standards and Technologies, RaptorFX can use many modern APIs like fetch and Web Push.",
		icon: "web"
	},
	{
		title: "Cross-Platform",
		description:
			"RaptorFX is built to run on all 5 major operating systems; Windows, Mac, Linux, Android, and iOS.",
		icon: "cross"
	},
	{
		title: "Open Source",
		description:
			"Built upon and as open source, RaptorFX is licensed under the MIT License, meaning you can use it for free!",
		icon: "open"
	},
	{
		title: "Deno-Powered",
		description:
			"Powered by Deno, RaptorFX is built to be as efficient as possible, including being fast, secure, and reliable.",
		icon: "deno"
	}
]

export default function Index() {
	return (
		<>
			<Embed />
			<Hero />
			<section className="index">
				<div className="pre-features">
					<h1>Cross-Platform Apps made Easy~!</h1>
					<p>RaptorFX makes the hard parts easy so you can focus on delivering!</p>
				</div>
				<Standout title="Features" />
				<div className="features">
					{features.map((feature) => (
						<Feature key={feature.title} {...feature} />
					))}
				</div>
			</section>
		</>
	)
}
