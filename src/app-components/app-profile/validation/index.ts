import * as yup from 'yup';

export const scheme = yup.object().shape({
  file: yup.mixed().required('Необходимо добавить файл!'),
});
