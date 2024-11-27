import * as yup from 'yup';

export const scheme = yup.object().shape({
  name: yup.string().required('Необходимое поле!'),
  sur_name: yup.string().required('Необходимое поле!'),
  user_type: yup.string().required('Необходимое поле!'),
  email: yup.string().email('Не верный формат почты!').required('Необходимое поле!'),
  location: yup.string(),
  phone: yup.string(),
  link: yup.string().required('Необходимое поле!'),
  avatar: yup.mixed(),
});
