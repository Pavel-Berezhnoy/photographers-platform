import { AccountType, IProfile } from '../types/profile.d';

export const mockMyProfile: IProfile = {
  id: 12123456,
  avatar: 'https://images.unsplash.com/photo-1619533394727-57d522857f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  name: 'Alex',
  sur_name: 'Mayson',
  in_favorite: false,
  count_reviews: 20,
  rating: 4.8,
  user_type: AccountType.PHOTO,
  email: 'alex.mayson@gmail.com',
  location: 'г. Ростов-на-Дону, ул. Пушкина 12',
  about: 'С самого детства меня завораживал процесс, как папа проявляет фотопленки в ванной комнате, а мама клеила готовые фото в альбомы и украшала их вырезками из открыток. Но осознание того, что я хочу этому посвятить свою жизнь, пришло ко мне с рождением уже собственных детей. Я понимал, что они меняются со скоростью света и я просто не имею права это пропустить.',
  link: 'alex.mayson@canie.com',
  phone: '+79991127606',
  updated_at: '12.12.2023',
  created_at: '12.12.2023',
};

export const mockOtherProfile: IProfile = {
  id: 55656,
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvAaPUYIRACtqsLTDbMjJ_JklKzY1flytMQ&usqp=CAU',
  name: 'Dmitry',
  sur_name: 'Groferov',
  count_reviews: 12,
  rating: 4.6,
  in_favorite: false,
  user_type: AccountType.MODEL,
  email: 'dmitry.grof@gmail.com',
  location: 'г. Ростов-на-Дону, ул. Пушкина 12',
  about: `Я занимаюсь свадебной фотографией уже 10 лет.Ловлю искренние счастливые моменты, получая яркие и стильные фотографии :)Которые будут хранить память на долгие годы

  Предварительная встреча, на которой мы обсудим все детали, расчёт тайминга, подбор локаций для фотосессии
  Обработка всех фото, бокс с напечатанными фото — 20 шт, флешка
  
  Вам не нужно уметь фотографироваться. Важно быть искренними и настоящими,а остальное сделает тот, кто держит в руках камеру.Вам будет со мной комфортно и легко:)`,
  link: 'dmitry.grof@canie.com',
  phone: '+79991127606',
  updated_at: '12.12.2023',
  created_at: '12.12.2023',
};

export const mockOtherProfileList = [
  mockOtherProfile,
  mockOtherProfile,
  mockOtherProfile,
  mockOtherProfile,
  mockOtherProfile,
  mockOtherProfile,
  mockOtherProfile,
  mockOtherProfile,
  mockOtherProfile,
];
