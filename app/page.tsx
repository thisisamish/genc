import Link from 'next/link';
import { Button } from '@radix-ui/themes';

export default function Home() {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="flex flex-col">
				<h1 className="text-center text-5xl font-bold mb-4">GenC</h1>
				<p className="mb-20">
					Create and verify certificate IDs with ease
				</p>
				<div className="flex gap-2">
					<Button className="flex-1">
						<Link href="/generate">Generate IDs</Link>
					</Button>
					<Button className="flex-1">
						<Link href="/verify">Verify IDs</Link>
					</Button>
				</div>
			</div>
		</main>
	);
}
