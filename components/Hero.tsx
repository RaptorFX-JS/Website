import { Link } from "aleph/react"

const heroButtons = {
	"Get Started": "/docs",
	"Learn More": "/about"
}

export default function Hero() {
	return (
		<>
			<section className="hero">
				<img
					src="/assets/banner.png"
					alt="Banner which contains the RaptorFX logo with the text 'RaptorFX'"
				/>
				<h1>A Modern-Denofied Solution to Building Apps!</h1>
				<div className="hero-link-container">
					{Object.entries(heroButtons).map(([x, y]) => (
						<Link
							key={y}
							to={y}
							className="hero-link"
							id={`hero-link-${y.replace("/", "")}`}
						>
							{x}
						</Link>
					))}
				</div>
			</section>
		</>
	)
}
