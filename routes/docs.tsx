import { PropsWithChildren } from "react"
import { MDXProvider } from "@mdx-js/react"
import { NavLink } from "aleph/react"
import { components } from "~/components/Heading.tsx"

interface ChildNodes {
	name: string
	path: string
}

const nav: Record<string, string | ChildNodes[]> = {
	"About": "/docs/",
	"Get Started": "/docs/get-started",
	"Integration": [
		{
			name: "Window",
			path: "/docs/integration/window"
		},
		{
			name: "Notifications",
			path: "/docs/integration/notifications"
		},
		{
			name: "File System",
			path: "/docs/integration/filesystem"
		}
	]
}

export default function Docs(props: PropsWithChildren) {
	return <div className="docs">
		<ul className="docs-list">
			{Object.entries(nav).map(([name, path]) => {
				if (typeof path === "string") {
					return (
						<li>
							<NavLink
								className="docs-item"
								to={path}
								activeClassName="active"
								exact
							>
								{name}
							</NavLink>
						</li>
					)
				} else {
					return (
						<li>
							<NavLink
								className="docs-item"
								to={`/docs/${name.toLowerCase()}`}
								activeClassName="active"
								exact
							>
								{name}
							</NavLink>
							<ul className="docs-list-inner">
								{path.map((x) => (
									<li>
										<NavLink
											className="docs-item"
											to={x.path}
											activeClassName="active"
											exact
										>
											{x.name}
										</NavLink>
									</li>
								))}
							</ul>
						</li>
					)
				}
			})}
		</ul>
		<div className="markdown-body">
			<MDXProvider components={components}>
				{props.children}
			</MDXProvider>
		</div>
	</div>
}
