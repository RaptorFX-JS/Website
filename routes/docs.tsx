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
	return <div className="flex flex-col sm:flex-row mx-2 w-auto max-w-[100vw] min-h-[80vh]">
		<ul className="-ml-2 mt-1">
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
							<ul className="-ml-3 -mb-3">
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
		<div className="sm:pl-3 sm:max-w-[calc(100vw-240px)]">
			<MDXProvider components={components}>
				{props.children}
			</MDXProvider>
		</div>
	</div>
}
