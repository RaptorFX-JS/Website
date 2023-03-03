export interface ITeamMember {
	name: string
	role: string[]
	description: string
	image: string
}

export default function TeamMember(member: ITeamMember) {
	return (
		<>
			<div className="border-2 border-solid border-[grey] p-2">
				<div className="flex justify-center items-center p-0">
					<img
						src={`/assets/pfp/${member.image}.png`}
						alt={member.name}
						className="h-16 w-16 rounded-full"
					/>
				</div>
				<hr />
				<div>
					<h3>{member.name}</h3>
					<p className="min-h-36">{member.description}</p>
					<hr />
					<ul>
						{member.role.map((role) => {
							return <li>{role}</li>
						})}
					</ul>
				</div>
			</div>
		</>
	)
}
