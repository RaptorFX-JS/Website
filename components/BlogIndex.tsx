import { Link } from "aleph/react"

interface IBlogPost {
	title: string
	slug: string
	description?: string
}

const blogPosts: IBlogPost[] = [
	{
		title: "Hello Denosaurs!",
		slug: "/blog/hello-denosaurs",
		description: "Welcome to the RaptorFX blog!"
	},
	{
		title: "Roadmap",
		slug: "/blog/roadmap", 
		description: "Roadmap for RaptorFX!"
	}
]

function BlogPost(post: IBlogPost) {
	const description = post.description ? <p className="my-1">{post.description}</p> : null
	return <div className="border-2 border-solid border-[grey] p-2 mb-2">
		<Link to={post.slug}>{post.title}</Link>
		{description}
	</div>
}

export default function BlogIndex() {
	return <>
		{blogPosts.map((post) => BlogPost(post))}								
	</>
}