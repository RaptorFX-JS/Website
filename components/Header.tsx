import { Link } from "aleph/react"

const links = ["Docs", "Blog", "About"]

export default function Header() {
	return (
		<>
			<header>
				<nav className="header-nav">
					<Link to={"/"} className="header-nav-img">
						<img
							src="/assets/logo.png"
							alt="RaptorFX logo"
							width="64"
							height="64"
						/>
					</Link>
					<div>
						{links.map((x) => (
							<Link
								key={x}
								to={`/${x.toLowerCase()}`}
								className="header-nav-links"
								id={`header-nav-link-{${x.toLowerCase()}}`}
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
