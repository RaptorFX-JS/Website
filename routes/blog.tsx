import { PropsWithChildren } from "react"
import { MDXProvider } from "@mdx-js/react"
import { components } from "~/components/Heading.tsx"

export default function Blog(props: PropsWithChildren) {
    return <div className="blog-markdown-body">
        <MDXProvider components={components}>
            {props.children}
        </MDXProvider>
    </div>
}