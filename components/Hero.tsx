import { Link } from "aleph/react"

const heroButtons = {
	"Get Started": "/docs",
	"Learn More": "/about"
}

export default function Hero() {
	return (
		<>
			<section className="flex p-8 flex-col justify-center items-center bg-black">
				<img
					src="/assets/banner.png"
					alt="Banner which contains the RaptorFX logo with the text 'RaptorFX'"
					className="w-[80vw] image-render-pixel sm:-m-8"
				/>

				<h1 className="text-center text-white mb-4 text-xl sm:mt-4 sm:text-[2rem]">A Modern-Denofied Solution to Building Apps!</h1>
				
				<div className="grid gap-1 grid-cols-1 min-w-full sm:grid-cols-2 sm:min-w-0">
					{Object.entries(heroButtons).map(([x, y]) => (
						<Link
							key={y}
							to={y}
							className="max-w-full m-2 p-2 text-white no-underline text-center text-[1.5rem] border-[2.5px] border-solid border-white visited:text-white hover:bg-white hover:visited:text-black duration-[250ms]"
						>
							{x}
						</Link>
					))}
				</div>
			</section>
		</>
	)
}
