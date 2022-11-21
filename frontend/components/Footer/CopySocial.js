import Link from 'next/link';

import { Social } from '@components/Social/Social';

export const CopySocial = () => (
	<>
		<Link href="/contact">
			<a>Contact</a>
		</Link>
		<Social />
	</>
);
