import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email('Неправильный email').required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
});
