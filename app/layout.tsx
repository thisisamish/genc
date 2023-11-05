import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'GenC',
	description: 'Create and verify certificate IDs with ease',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Theme>{children}</Theme>
			</body>
		</html>
	);
}
