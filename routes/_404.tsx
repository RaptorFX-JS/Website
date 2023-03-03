import { Link } from "aleph/react"
import Embed from "../components/OpenGraphEmbed.tsx"

export default function E404() {
	return (
		<>
			<Embed
				title="RaptorFX | 404!"
				description="Whoops! We could not find what you were looking for! :("
			/>
			<div className="min-h-[80vh] flex p-2 flex-col justify-center items-center">
				<div className="border-2 border-solid border-[grey] p-4 text-center">
					<h3>Ooooooops, nothing here!</h3>
					<p className="m-0">
						<Link to="/">Go back to the homepage</Link>
					</p>
				</div>
			</div>
		</>
	)
}
