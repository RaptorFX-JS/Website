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
	const description = post.description ? <p>{post.description}</p> : null
	return <div className="blog-post-container">
		<Link to={post.slug}>{post.title}</Link>
		{description}
	</div>
}

export default function BlogIndex() {
	return <>
		{blogPosts.map((post) => BlogPost(post))}								
	</>
}