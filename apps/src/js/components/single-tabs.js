const tabsLi = document.querySelectorAll('.single_tab-min li');
const bigImg = document.querySelector('.single_tab-img img');

if (tabsLi.length && bigImg) {
  tabsLi.forEach((tab, key)=>{
  tab.addEventListener('click', function() {
    tabsLi.forEach((tab2, key2)=>{
      tab2.classList.remove('active');
    })
    const tabSrc = tab.querySelector('img').getAttribute('src');
    tab.classList.add('active');
    bigImg.setAttribute('src', tabSrc);
  })
  })
}