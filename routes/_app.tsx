import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"

export default function App({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
