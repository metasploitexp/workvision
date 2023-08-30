import moment from "moment";
/* Функция для сравнения двух дат */
export function compareDates(date1: Date, date2: Date): number {
	const momentDate1 = moment(date1);
	const momentDate2 = moment(date2);
	if (momentDate1.isBefore(momentDate2)) {
		return -1;
	} else if (momentDate1.isAfter(momentDate2)) {
		return 1;
	} else {
		return 0;
	}
}
// Функция для преобразования даты в формат "дд-мм-гггг"
/* export function formatDate(date: Date): string {
	return moment(date).format("DD-MM-YYYY");
} */

// Функция для преобразования даты в формат "дд-мес-гггг"
export function formatDate(date: Date): string {
	return moment(date).format("DD-MMM-YYYY");
}
