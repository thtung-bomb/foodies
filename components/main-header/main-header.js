'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logoImage from '@/assets/logo.png'
import classes from './main-header.module.css'
import NavLink from './nav-link'

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
						<NavLink href="/meals">
							Browse Meals
						</NavLink>
					</li>
					<li>
						<NavLink href="/community">
							Foodies Community
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader