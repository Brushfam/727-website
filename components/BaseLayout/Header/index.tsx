import Link from 'next/link';
import ModStyle from './style.module.scss';

export default function Header() {

	return (
		<header className={ModStyle.header}>
			<div className={ModStyle.headerWrapper}>
				<Link href="/">
					<a>
						<div className={ModStyle.logoContainer}>
							<img
								src = "/img/logo.png"
								alt = "727-LOGO"
							/>
						</div>
					</a>
				</Link>
				<nav className={ModStyle.navigation}>
					<ul>
						<a href="https://twitter.com/727_ventures">
							<img
								alt="twitter" src="/img/twitter.png" width="25" height="25"
							/>
						</a>
					</ul>
				</nav>
			</div>
		</header>
	)
};