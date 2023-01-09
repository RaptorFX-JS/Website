import { Link } from "aleph/react"
import Embed from "../components/OpenGraphEmbed.tsx"

export default function E404() {
	return (
		<>
			<Embed
				title="RaptorFX | 404!"
				description="Whoops! We could not find what you were looking for! :("
			/>
			<div className="e404">
				<div className="e404-inner">
					<h3>Ooooooops, nothing here!</h3>
					<p>
						<Link to="/">Go back to the homepage</Link>
					</p>
				</div>
			</div>
		</>
	)
}
