// 3. Создание объекта на основе данных о себе. 

const user = {
  fullName: "Галиуллин Ильнар",
  emailAddress: "omts400@gmail.com",
  job: "Инженер",
  age: 32,
  country: "Россия",
  city: "Альметьевск",
  nationality: "Татарин",
  religion: "Ислам",
  relationshipStatus: "женат",
  numberChildren: 2,
  hobby: "чтение книг"
};

console.log(user)

// 4. Создание объекта, который хранит данные об автомобиле + доп свойство владелец авто

const infoVehicle = {
  mark: "Toyota",
  model: "Corolla",
  year: 2015,
  color: 'grey',
  tranmission: "automatic",
}

infoVehicle.holder = user;

console.log(infoVehicle)

// 5. Функция которая аргументом будет принимать объект, описанный в пункте №4. Проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение.

function checkMaxSpeed (infoVehicle) {
  if (!("maxSpeed" in infoVehicle)) {
    infoVehicle.maxSpeed = 240;
  } else {
    return;
  }
}

checkMaxSpeed(infoVehicle);
console.log(infoVehicle.maxSpeed)

// 6. Функция первый аргумент — объект, второй аргументом — свойство объекта, и вывести его значение.

function showObjectProperty(object, key) {
  console.log(object[key])
};

showObjectProperty(infoVehicle, "mark");
showObjectProperty(user, "fullName");

// 7. Массив, который содержит названия продуктов 

const listProducts = ["Макарон", "Яблоки", "Огурцы", "Сливочное масло"];

console.log(listProducts[3]);

// 8. Массив соостоящий из трех объектов содержащий в себе свойства + метод массив push 

const selfDevelopmentBooks = [
  {
    title: "Богатый папа, бедный папа", 
    author: "Роберт Кийосаки",
    yearRelease: 1997,
    coverColor: "Темно-Фиолетовый",
    genre: "Саморазвитие"
  },
  {
    title: "Самый богатый человек в Вавилоне",
    author: "Джордж Клейсон",
    yearRelease: 2005,
    coverColor: "Красный",
    genre: "Личные финансы"
  },
  {
    title: "Путь к финансовой свободе",
    author: "Бодо Шеффер",
    yearRelease: 2015, 
    coverColor: "Синий",
    genre: "Финансовая грамотность"
  }
];

selfDevelopmentBooks.push(
  {
  title: "Сам себе финансист",
  author: "Анастасия Тарасова",
  yearRelease: 2021, 
  coverColor: "Зеленый",
  genre: "Саморазвитие"
  }
);

console.log(selfDevelopmentBooks[2]);

// 9. Еще один массив, состоящих из тех же книг, но относящийся к другому жанру "Воспитание", и объединяем массивы selfDevelopmentBooks + 

const raisingChildrenBooks = [
  {
    title: "Таяная опора",
    author: "Людмила Петрановская",
    yearRelease: 2014,
    coverColor: "Белый",
    genre: "Психология воспитания"
  },
  {
    title: "Как говорить, чтобы дети слушали",
    author: "Адель Фабер, Элейн Мазлиш",
    yearRelease: 1980,
    coverColor: "Синий",
    genre: "Педагогика"
  },
  {
    title: "Воспитание с умом",
    author: "Д. Сигел, Т. П. Брайсон",
    yearRelease: 2011,
    coverColor: "Оранжевый",
    genre: "Нейропсихология"
  }
];

const resultBooks = [...selfDevelopmentBooks, ...raisingChildrenBooks];

console.log(resultBooks);

//10. функцию, которая принимает массив сущностей с задания №9. Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги, устанавливаем true или false.

function addRareBook(books) {
  return books.map(book => ({
    ...book, 
    isRare: book.yearRelease > 2000
  }));
}

const updateBooks = addRareBook(resultBooks);

console.log(updateBooks);
