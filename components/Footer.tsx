const socials: Record<string, string> = {
	discord: "https://discord.gg/GckFjzV2Qj",
	twitter: "https://twitter.com/ishatgupta",
	github: "https://github.com/RaptorFX-JS/"
}

export default function Footer() {
	return (
		<footer>
			<div className="footer-social">
				{Object.keys(socials).map((social) => {
					return (
						<a
							href={socials[social]}
							key={social}
							target="_blank"
							rel="noreferrer"
							className="footer-social-link"
						>
							<img
								src={`/assets/social/${social}.png`}
								alt={social}
								className="footer-social-icon"
							/>
						</a>
					)
				})}
			</div>
			<br />
			<p>© Copyright 2022 - RaptorFX, ReMod Software</p>
		</footer>
	)
}
