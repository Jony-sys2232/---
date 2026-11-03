/// бургер-меню
window.onload = function () {
  const burgerNode = document.querySelector(".header__burger_menu");
  const menuNode = document.querySelector(".header__right");
  const closeNode = document.querySelector(".menu__close");
  const bodyNode = document.querySelector("body");

 
  function lockScroll() {
    bodyNode.classList.add("oh");
  }
  function unlockScroll() {
    bodyNode.classList.remove("oh");
  }

  // показ и скрытие полноэкранного меню
  function showMenu() {
    menuNode.classList.remove("hidden");
  }
  function hideMenu() {
    menuNode.classList.add("hidden");
  }


  function setMobileState() {
    burgerNode.classList.remove("hidden");
    closeNode.classList.remove("hidden");
    hideMenu();
  }
  function setDesktopState() {
    burgerNode.classList.add("hidden");
    closeNode.classList.add("hidden");
    showMenu();
    unlockScroll();
  }

  function updateState() {
    if (window.innerWidth <= 1024) {
      setMobileState();
    } else {
      setDesktopState();
    }
  }

  updateState();
  window.addEventListener("resize", updateState);


  burgerNode.addEventListener("click", function () {
    if (menuNode.classList.contains("hidden")) {
      lockScroll();
      showMenu();
    } else {
      unlockScroll();
      hideMenu();
    }
  });

  // клик по крестику
  closeNode.addEventListener("click", function () {
    unlockScroll();
    hideMenu();
  });
};