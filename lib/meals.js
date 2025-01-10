// write code reach out the data and gets data from database
import sql from 'better-sqlite3'

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
