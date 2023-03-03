import { Link } from "aleph/react"

const links = ["Docs", "Blog", "About"]

export default function Header() {
	return (
		<>
			<header>
				<nav className="flex justify-between items-center">
					<Link to={"/"} className="h-8 w-8">
						<img
							src="/assets/logo.png"
							alt="RaptorFX logo"
							className="h-8 w-8 image-render-pixel"
						/>
					</Link>
					<div>
						{links.map((x) => (
							<Link
								key={x}
								to={`/${x.toLowerCase()}`}
								className="text-white text-base m-2 no-underline visited:text-white"
							>
								{x}
							</Link>
						))}
					</div>
				</nav>
			</header>
		</>
	)
}
