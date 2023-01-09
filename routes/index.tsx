import Hero from "~/components/Hero.tsx"
import Feature, { IFeatures } from "~/components/Features.tsx"
import Embed from "~/components/OpenGraphEmbed.tsx"
import Standout from "~/components/StandoutHeading.tsx"

const features: IFeatures[] = [
	{
		title: "Web Standards",
		description:
			"Built on Web Standards and Technologies, RaptorFX can use many modern APIs like fetch and Web Push.",
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
		title: "Deno",
		description:
			"Built on top of Deno, RaptorFX is built to be fast, secure, and reliable.",
		icon: "deno"
	}
]

export default function Index() {
	return (
		<>
			<Embed />
			<Hero />
			<section className="index">
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
