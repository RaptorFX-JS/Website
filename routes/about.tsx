import TeamMember, { ITeamMember } from "../components/TeamMember.tsx"
import Embed from "../components/OpenGraphEmbed.tsx"

const team: ITeamMember[] = [
	{
		name: "LePichu",
		role: ["Lead Developer", "Mobile Team", "Tools Team"],
		description:
			"The founder of RaptorFX and is the lead developer of the project; long time programmer and web developer, actively inspired by names like Ryan Carniato and Evan You.",
		image: "lepichu"
	},
	{
		name: "Arc'blroth",
		role: ["Lead Developer", "Desktop Team", "Tools Team"],
		description:
			"Rust and Deno Evangelist, the man behind the 'core' internals and leading the technical side of the project. Also the creator of JS Engine Neutral Deno, 'deno_minus_v8'.",
		image: "arc"
	},
	{
		name: "RyanCaoDev",
		role: ["Design Team", "Mobile Team"],
		description:
			"Ryan is a contributor and designer on the sub-project 'Amber' for the Cupertino Design Set, he is also a member of the mobile team.",
		image: "ryan"
	},
	{
		name: "suyashtnt",
		role: ["Design Team", "Mobile Team"],
		description: 
			"Rust enjoyer, and a Svelte Developer who likes Tauri and similar tech, now working on our Apple Platform Support and Amber Components.",
		image: "wobbler"	
	}
]

export default function About() {
	return (
		<>
			<Embed
				title="RaptorFX | About Us!"
				description="Get to know us a little, this is who we are and how we came to be!"
			/>
			<div className="m-2">
				<h1>About Us!</h1>
				<hr />
				<p>
					<b>RaptorFX</b> originally started back in June of 2021 as a
					project named <b>WebSmith</b>, which at the time, was closer
					to Electron but Deno as host instead of what it is today.
					<br />
					<br />
					Starting in Early October of the same year, However, things
					started to change, the project got rebranded to Brontodroid
					and focused solely on Android. However, this was bound to
					change and I decided to go with the multiple-platform
					approach and rebranded to <b>RaptorFX</b> and decided to
					target all 5 major operating systems (Windows, Mac, Linux,
					Android, and iOS).
					<br />
					<br />I was alone, and well, couldn't slowly handle any
					approaches to sanely get <b>Deno</b> to function in the DOM.
					Fast-forward to about late Summer of 2022, the now co-lead
					of the team, Arc chimed in and made
					<b> deno_minus_v8</b> to allow for Deno to function in the
					DOM. This was a huge step forward and allowed for the
					project to move forward and be able to be worked on again
					properly.
					<br />
					<br />
					That is our little backstory, it is <b>22/12/2022</b> while
					I write this and the project has never been more alive and
					worked on before. We are currently working on the first
					release of <b>RaptorFX</b>, which is expected to be released
					in Summer of 2023.
					<br />
					<br />
					<b>~ LePichu, Founder of RaptorFX</b>
				</p>
				<hr />
				<h2>Meet the Team!</h2>
				<br />
				<div className="grid grid-cols-1 touch-grid-cols-2 sm:grid-cols-4 gap-4">
					{team.map((member) => {
						return <TeamMember {...member} />
					})}
				</div>
				<hr />
				<h2 className="m-0">Licenses and Credits</h2>
				<p className="my-2">
					- <b>RaptorFX</b> is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>. <br />
					- <b>Footer Social Media Icons</b> and <b>Frontpage Features Icons</b> are made by <a href="https://twitter.com/pixelstoriez">Pixelstories</a>. <br />
					- <b>RaptorFX Icon and Banner</b> was made by <a href="https://www.tumblr.com/blog/arathainbutreal">ArathainFarqoe</a> and <a href="https://twitter.com/felipe_does_pxl">FelipeBdC</a>. <br />
					- <b>Pixel Unicode Font</b> was made by <a href="https://www.fontsc.com/font/designer/iviland">IviLand</a>. <br />
				</p>
			</div>
		</>
	)
}
