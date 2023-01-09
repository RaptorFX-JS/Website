export interface ITeamMember {
	name: string
	role: string[]
	description: string
	image: string
}

export default function TeamMember(member: ITeamMember) {
	return (
		<>
			<div className="team-member">
				<div className="team-member-img-container">
					<img
						src={`/assets/pfp/${member.image}.png`}
						alt={member.name}
						className="team-member-img"
					/>
				</div>
				<hr />
				<div>
					<h3>{member.name}</h3>
					<p className="team-member-desc">{member.description}</p>
					<hr />
					<ul className="team-member-list">
						{member.role.map((role) => {
							return <li>{role}</li>
						})}
					</ul>
				</div>
			</div>
		</>
	)
}
