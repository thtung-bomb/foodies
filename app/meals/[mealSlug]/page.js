import Image from 'next/image'
import classes from './page.module.css'
import { getMealBySlug } from '@/lib/meals'

export default function MealsDetailsPage({ params }) {

	const meal = getMealBySlug(params.mealSlug)

	meal.instructions = meal.instructions.replace(/\n/g, '<br />')

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} fill />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>
						Summary
					</p>
				</div>
			</header>
			<main>
				<p className={classes.instructions} dangerouslySetInnerHTML={{
					__html: `${meal.instructions}`
				}}></p>
			</main>
		</>
	)
}
