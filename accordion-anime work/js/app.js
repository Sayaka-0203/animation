const accordions = document.querySelectorAll(`.list-item`);
accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    const content = accordion.querySelector(`.list-content`);
    content.classList.toggle(`active`);
    if(content.classList.contains(`active`)){
      const listHeight = content.scrollHeight;
      content.style.height = listHeight + 'px';
    }
    else{
      content.style.height = '0px';
    }
  });
});
