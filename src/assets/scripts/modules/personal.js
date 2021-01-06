const body = document.querySelector('body');
const about = document.querySelector('.about');


if (body.contains(about)) {
  const aboutBtn = about.querySelector('.btn');
  const personal = document.querySelector('.personal');

  aboutBtn.addEventListener('click', function () {
    personal.classList.toggle('_hidden');
  })
}


