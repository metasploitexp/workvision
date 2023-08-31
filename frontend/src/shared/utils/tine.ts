import moment from "moment";
/* функция для проверки какая дата идёт по середине  */

export function isDateBetween(
	date: Date,
	startDate: Date,
	endDate: Date
): boolean {
	const momentDate = moment(date);
	const momentStarDate = moment(startDate);
	const momentEndDate = moment(endDate);
	return momentDate.isBetween(momentStarDate, momentEndDate, undefined, "[]");
}
/* Функцию для определения какая дата идет раньше */
export function isDateBefore(date1: Date, date2: Date): boolean {
	return moment(date1).isBefore(date2);
}

/* Функция для привидения даты к типу дд-мм-гггг (пример 22-08-2023) */
export function formatDate(date: Date): string {
	return moment(date).format("DD-MM-YYYY");
}

/* Функция для привидения даты к типу дд мес.гггг (пример 22 авг. 2023) */
export function formatDateM(date: Date): string {
	return moment(date).format("DD-MMM-YYYY");
}
