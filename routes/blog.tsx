import { PropsWithChildren } from "react"
import { MDXProvider } from "@mdx-js/react"
import { components } from "~/components/Heading.tsx"

export default function Blog(props: PropsWithChildren) {
	return (
		<div className="min-h-[80vh] p-2 md:px-32">
            <style>
                {
                    `h1 {
                        font-size: 1.5rem;
                    }
                    p:has(img) {
                        display: flex;
                        justify-content: center;
                    }
                    `
                }
            </style>
			<MDXProvider components={components}>
				{props.children}
			</MDXProvider>
		</div>
	)
}
