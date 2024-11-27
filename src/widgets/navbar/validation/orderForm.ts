import * as yup from 'yup';
import parse from 'date-fns/parse';
import { toUTC } from '../../../services/helpers';

export const scheme = yup.object({
  title: yup
    .string()
    .required('Обязательное поле'),
  details: yup
    .string()
    .required('Обязательное поле'),
  date: yup
    .date()
    .transform((value, originalValue, context) => {
      if (context.isType(value)) return value;
      return toUTC(parse(originalValue, 'dd.MM.yyyy HH:mm', new Date()));
    })
    .typeError('Неправильный формат даты')
    .required('Обязательное поле'),
  duration: yup.string().required('Обязательное поле'),
  address: yup.string().required('Обязательное поле'),
  price: yup.number().typeError('Цена должна быть числом').min(100, 'Минимальное значение - 100').required('Обязательное поле'),
});
