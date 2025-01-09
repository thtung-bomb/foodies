import Link from 'next/link'
import React from 'react'
import logoImage from '@/assets/logo.png'

function MainHeader() {
	return (
		<header>
			<Link href="/">
				<img src={logoImage.src} alt='A plate with food on it' />
				NextLevel Food
			</Link>
			<nav>
				<ul>
					<li>
						<Link>Browser</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader
