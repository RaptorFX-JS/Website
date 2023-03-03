const socials: Record<string, string> = {
	discord: "https://discord.gg/GckFjzV2Qj",
	twitter: "https://twitter.com/ishatgupta",
	github: "https://github.com/RaptorFX-JS/"
}

export default function Footer() {
	return (
		<footer className="flex text-center text-white bg-black flex-col justify-center items-center p-4">
			<div className="flex justify-center items-center">
				{Object.keys(socials).map((social) => {
					return (
						<a
							href={socials[social]}
							key={social}
							target="_blank"
							rel="noreferrer"
							className="h-8"
						>
							<img
								src={`/assets/social/${social}.png`}
								alt={social}
								className="image-render-pixel h-8 w-8 m-2 opacity-50 duration-[250ms] hover:opacity-100"
							/>
						</a>
					)
				})}
			</div>

			<br />
			
			<p className="m-4">© Copyright 2022 - RaptorFX, ReMod Software</p>
		</footer>
	)
}
