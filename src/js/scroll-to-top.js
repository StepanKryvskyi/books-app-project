import { btnToTop } from "./refs";

function scrollTop (){
window.addEventListener('scroll', onScrollShowBtn);

function onScrollShowBtn() {
    window.scrollY > 200 ? btnToTop.classList.add("show") : btnToTop.classList.remove("show");
  };

btnToTop.addEventListener('click', onClickGoTop)

  function onClickGoTop() {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 70);
        onClickGoTop();
      }, 10);
    }   
  }
}

export {scrollTop}