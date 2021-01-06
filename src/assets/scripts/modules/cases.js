const body = document.querySelector('body');
const cases = document.querySelector('.cases');


if (body.contains(cases)) {
  const casesBtn = cases.querySelector('.btn');
  const casesGridMore = document.querySelector('.cases__grid-block_more');

  casesBtn.addEventListener('click', function () {
    casesGridMore.classList.toggle('_hidden');
    casesBtn.classList.toggle('_hidden');
  })
}


