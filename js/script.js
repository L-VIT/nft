//Tabs
function tabs(bntArrSelector, contentArrSelector, activeBtnSelector, activeContentSelector) {
    const bntArr = document.querySelectorAll(bntArrSelector),
          contentArr = document.querySelectorAll(contentArrSelector),
          btnActiveSelector = activeBtnSelector,
          contentActiveSelector = activeContentSelector;

    bntArr.forEach((item, i) => {
        item.addEventListener('click', () => {
            document.querySelector(`.${btnActiveSelector}`).classList.remove(btnActiveSelector);
            item.classList.add(btnActiveSelector);
            document.querySelector(`.${contentActiveSelector}`).classList.remove(contentActiveSelector);
            contentArr[i].classList.add(contentActiveSelector);
        });
    });

}


tabs('.marketplace__tab', '.marketplace__content', 'marketplace__tab--active', 'marketplace__content--active');