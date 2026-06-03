const signInBTn = document.querySelector('.sign-in');
const signIn = document.querySelector('.signin');
const signItems = document.querySelector('.signin_items');
signInBTn.addEventListener('click', function(e) {
  signIn.style = 'display: flex';
})
signIn.addEventListener('mouseup', function(e) {
  signIn.style = 'display: none';
})
signIn.addEventListener('mousewheel', function(e) {
  signIn.style = 'display: none';
})
signItems.addEventListener('mouseup', function(e) {
  e.stopPropagation();
})