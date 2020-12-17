const allLists = document.querySelectorAll('.image-container li');

function getColor() {
  const colorCode = '0123456789abcdef';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += colorCode[Math.floor(Math.random() * 16)];
  }

  return color;
}

allLists.forEach((list) => {
  list.style.backgroundColor = getColor();
});
