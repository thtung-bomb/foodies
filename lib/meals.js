// write code reach out the data and gets data from database
import fs from 'node:fs'

import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 5000))

	// throw new Error('Loading meals failed')
	// run() use if you insert data
	// all() -> fetching data
	// get() -> single row
	return db.prepare('SELECT * FROM meals').all()
}

export function getMealBySlug(slug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true })
	meal.instructions = xss(meal.instructions)

	const extension = meal.image.name.split('.').pop()
	const fileName = `${meal.slug}.${extension}`

	const stream = fs.createWriteStream(`public/images/${fileName}`)
	const bufferedImage = await meal.image.arrayBuffer()

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error(`Error writing ${fileName}`)
		}
	})

	meal.image = `/images/${fileName}`

	db.prepare(`
			INSERT INTO meals 
				(title, summary, instructions, creator, creator_email, image, slug)
			VALUES (
					@title,
					@summary,
					@instructions,
					@creator,
					@creator_email,
					@image,
					@slug
				)
			`).run(meal)
}
