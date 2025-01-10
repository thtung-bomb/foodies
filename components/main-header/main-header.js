import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logoImage from '@/assets/logo.png'
import classes from './main-header.module.css'

function MainHeader() {
	return (
		<header className={classes.header}>
			<Link className={classes.logo} href="/">
				<Image src={logoImage} alt='A plate with food on it' priority />
				NextLevel Food
			</Link>
			<nav className={classes.nav}>
				<ul>
					<li>
						<Link href="/meals">Browser Meals</Link>
					</li>
					<li>
						<Link href="/community">Foodies Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader
