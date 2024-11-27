import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email('Неправильный email').required('Необходимо заполнить email'),
  password: yup.string().min(10, 'Пароль должен быть не менее 10 символов').required('Необходимо заполнить пароль'),
  name: yup.string().required('Необходимо заполнить имя'),
  surname: yup.string().required('Необходимо заполнить фамилию'),
  license: yup.bool().oneOf([true], 'Необходимо принять условия лицензионного соглашения'),
});
