import { serve } from "aleph/react-server"
import MDXLoader from "aleph/react/mdx-loader"
import routes from "~/routes/_export.ts"
import unocss from "aleph/unocss"
import presetUno from "@unocss/preset-uno"

// check https://mdxjs.com/docs/extending-mdx
import remarkFrontmatter from "https://esm.sh/remark-frontmatter@4.0.1"
import remarkGFM from "https://esm.sh/remark-gfm@3.0.1"
import rehypeHighlight from "https://esm.sh/rehype-highlight@5.0.2"
import rehypeSlug from "https://esm.sh/rehype-slug@5.1.0"

serve({
	loaders: [
		new MDXLoader({
			// @ts-ignore "Useless error; works fine."
			remarkPlugins: [remarkFrontmatter, remarkGFM],
			// @ts-ignore "useless error; works fine."
			rehypePlugins: [rehypeHighlight, rehypeSlug],
			providerImportSource: "@mdx-js/react",
		}),
	],
	router: {
		glob: "./routes/**/*.{tsx,mdx,md}",
		routes,
	},
	ssr: true,
	atomicCSS: unocss(/\.(jsx|tsx|mdx)$/, {
		resetCSS: false,
		presets: [
			presetUno(),
		],
		shortcuts: {
			"docs-item":
				"no-underline text-base sm:text-xs text-black visited:text-black",
		},
		rules: [
			[
				/touch-grid-cols-2/,
				() => `
				@media (any-pointer: coarse) and (min-width: 768px) {
					.touch-grid-cols-2 {
						grid-template-columns: repeat(2, 1fr) !important;
					}
				}
				`
			]
		]
	}),
})
