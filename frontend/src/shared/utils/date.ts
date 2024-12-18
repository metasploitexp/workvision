import 'moment/locale/ru';
import moment from 'moment';
const DATE_FORMATS = ['DD MMMM YYYY', 'DD MM YYYY'];

/* функция для проверки какая дата идёт по середине  */
export function isDateBetween(date: any, startDate: any, endDate: any) :boolean {
    return moment(date).isBetween(moment(startDate), moment(endDate))};

/* Функцию для определения какая дата идет раньше */
export function isDateBefore(date1: any, date2: any) {
    return moment(date1).isBefore(moment(date2))};

/* Функция для привидения даты к типу дд-мм-гггг (пример 22-08-2023)*/
export function formatDate(date: any): string {
    return moment(date, DATE_FORMATS).format('DD-MM-YYYY')};

/* Функция для привидения даты к типу дд мес.гггг (пример 22 авг. 2023) */
export function formatDateM(date: any): string {
    return moment(date, DATE_FORMATS).format('DD MMM YYYY')};
