import Link from 'next/link';

import { Social } from '@components/Social/Social';

export const CopySocial = () => (
	<>
		<p>&copy; {new Date().getFullYear()} Hayashi</p>
		<Link href="/">
			<a>Privacy Policy</a>
		</Link>
		<Social />
	</>
);
