
function myFunction(x) {
    x.classList.toggle("change");
  }

  const navToggle = document.querySelector('.hambuger');
  const menu = document.getElementById('menu');

  navToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
  });

