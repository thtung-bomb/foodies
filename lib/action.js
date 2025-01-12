'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

function isInvalidText(text) {
	return !text || text.trim() === ''
}

export async function shareMeal(prevState, formData) {
	'use server'
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('creator_email')
	}
	if (isInvalidText(meal.title)) {
		return { message: 'Title is required' };
	}
	if (isInvalidText(meal.summary)) {
		return { message: 'Summary is required' };
	}
	if (isInvalidText(meal.creator)) {
		return { message: 'Name is required' };
	}
	if (isInvalidText(meal.creator_email)) {
		return { message: 'Email is required' };
	}
	if (!meal.creator_email.includes('@')) {
		return { message: 'Invalid email address' };
	}
	if (!meal.image || meal.image.size === 0) {
		return { message: 'Image is required' };
	}

	await saveMeal(meal)
	revalidatePath('/meals')
	redirect('/meals')
}
