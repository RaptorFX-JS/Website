import type { FC, PropsWithChildren } from "react"
import { createElement } from "react"

// The props `id` is generated by `rehype-slug` plugin
export const Heading: FC<PropsWithChildren<{ id: string; level: number }>> = ({
	id,
	level,
	children,
	...rest
}) => {
	return createElement(
		`h${level}`,
		{ ...rest, id },
		<>
			<a className="opacity-25 duration-[250ms] no-underline text-[grey] mr-1 hover:opacity-100" href={`#${id}`}>
				↝
			</a>
			{children}
		</>
	)
}

export const components: Record<
	string,
	FC<PropsWithChildren<{ id: string }>>
> = {}

for (let i = 0; i < 6; i++) {
	components[`h${i + 1}`] = (props) => {
		return <Heading level={i + 1} {...props} />
	}
}
