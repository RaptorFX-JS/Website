export interface IFeatures {
	title: string
	description: string
	icon: string
}

export default function Features(features: IFeatures) {
	return (
		<div className="feature">
			<div className="feature-icon-container">
				<div className="feature-icon-glow-container">
					<div className="feature-icon-glow" />
					<img
						src={`/assets/icons/${features.icon}.png`}
						alt={features.title}
						className="feature-icon"
					/>
				</div>
			</div>
			<hr />
			<div>
				<h3 className="feature-text">{features.title}</h3>
				<p className="feature-text">{features.description}</p>
			</div>
		</div>
	)
}
