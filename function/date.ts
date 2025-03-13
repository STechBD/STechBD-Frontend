/**
 * Get the current year.
 *
 * @returns { number } The current year.
 */
export function currentYear(): number {
	return new Date().getFullYear()
}


/**
 * Get the current date.
 *
 * @returns { string } The current date.
 */
export function currentDate(): string {
	return new Date().toLocaleDateString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})
}


/**
 * Get the current time.
 *
 * @returns { string } The current time.
 */
export function currentTime(): string {
	return new Date().toLocaleTimeString('en-us', {
		hour: '2-digit',
		minute: '2-digit',
	})
}


/**
 * Get the current date and time.
 *
 * @returns { string } The current date and time.
 */
export function currentDateTime(): string {
	return currentDate() + ' ' + currentTime()
}


/**
 * Get the current date and time in ISO format.
 *
 * @returns { string } The current date and time in ISO format.
 */
export function currentDateTimeISO(): string {
	return new Date().toISOString()
}


/**
 * Get the current date and time in UTC format.
 *
 * @returns { string } The current date and time in UTC format.
 */
export function currentDateTimeUTC(): string {
	return new Date().toUTCString()
}


/**
 * Get the current date and time in UNIX format.
 *
 * @returns { number } The current date and time in UNIX format.
 */
export function currentDateTimeUNIX(): number {
	return Math.floor(new Date().getTime() / 1000)
}


/**
 * Get the current date and time in milliseconds.
 *
 * @returns { number } The current date and time in milliseconds.
 */
export function currentDateTimeMilliseconds(): number {
	return new Date().getTime()
}


/**
 * Get the current date and time in seconds.
 *
 * @returns { number } The current date and time in seconds.
 */
export function currentDateTimeSeconds(): number {
	return Math.floor(new Date().getTime() / 1000)
}


/**
 * Get the current date and time in minutes.
 *
 * @returns { number } The current date and time in minutes.
 */
export function currentDateTimeMinutes(): number {
	return Math.floor(new Date().getTime() / 1000 / 60)
}


/**
 * Get the current date and time in hours.
 *
 * @returns { number } The current date and time in hours.
 */
export function currentDateTimeHours(): number {
	return Math.floor(new Date().getTime() / 1000 / 60 / 60)
}
