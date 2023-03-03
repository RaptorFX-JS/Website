export interface IFeatures {
	title: string
	description: string
	icon: string
	alt: string
}

export default function Feature(features: IFeatures) {
	return (
		<div className="border-2 border-solid border-[grey] p-2">
			<div className="flex justify-center items-center p-0">
				<div className="feature-icon-glow-container">
					<img
						src={`/assets/icons/${features.icon}.png`}
						alt={features.alt}
						className="h-16 w-16 opacity-50 image-render-pixel duration-[250ms] hover:opacity-100"
					/>
				</div>
			</div>
			<hr />
			<div>
				<h3 className="text-center">{features.title}</h3>
				<p className="text-center mt-2 mb-2">{features.description}</p>
			</div>
		</div>
	)
}
