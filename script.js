console.log("HELLO WORLDs")

// Покраска фона раздела "состав" первой карточки

const recolorFirstCardButton = document.getElementById("recolor-first-button"); 
const  firstCardCompostion = document.querySelector(".product-card__composition");
const blueHashColor = "#FF0000";

recolorFirstCardButton.addEventListener("click", () => {
  firstCardCompostion.style.backgroundColor = blueHashColor;
})

// Покраска фона раздела "состав" во всех карточках товара 

const recolorAllCardCompositionsButton = document.getElementById("recolor-all-card-composition-button");
const cardCompostions = document.querySelectorAll(".product-card__composition");
const greenHashColor = "#00ff44";

recolorAllCardCompositionsButton.addEventListener ("click", () =>{
  cardCompostions.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
})

// Переход на главную страницу Google

const openGoogleButton = document.getElementById("open-google-button");
openGoogleButton.addEventListener ("click", openGoogle);

function openGoogle () {
  const answer = confirm('Вы дествительно хотите перейти на сайт Google?')

  console.log(answer);

  if (answer === true) {
    window.open('https://google.com')
  } else {
    console.log('Пользователь отменил переход на Google')
  }
}

// Вывод текста в консоль

const headerMoseover = document.querySelector('.heading');

headerMoseover.addEventListener('mouseover', function(){
  console.log("Выбери свой продукт")
})

// Переключение цвета кнопки 

const changeColorBtn = document.getElementById('change-color-btn');

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.classList.toggle('second-color');
});

