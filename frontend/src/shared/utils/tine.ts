import moment from "moment";
/* функция для сравнения двух дат  */
export function compareDates(date1: Date, date2: Date): boolean {
	const momentDate1 = moment(date1);
	const momentDate2 = moment(date2);
	return momentDate1.isBefore(momentDate2);
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
