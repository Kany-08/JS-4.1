/*
  Сделайте галерею случайных изображений собак
  
  1. При нажатии на «Далее», запросите данные по адресу 
  
  https://random.dog/woof.json?filter=mp4,webm

  2. Отобразите ответ data.url в картинке .image 
  
  Пример:
  https://codepen.io/neizerth/pen/XWOBKRM
  
  Общие задачи:
  1. Поменять классы в querySelector
  2. Поменять адрес
  3. Заменить data[0] на data.url
*/

const btn = document.querySelector('.btn');
const url = 'https://random.dog/woof.json?filter=mp4,webm';
const gallery = document.querySelector('.gallery')

btn.addEventListener('click', async () => {
  const response =  await fetch(url);
  const data = await response.json();
  gallery.src = data.url
})