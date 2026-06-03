const signInBTn = document.querySelector('.sign-in');
const signIn = document.querySelector('.signin');
const signItems = document.querySelector('.signin_items');

if (signInBTn && signIn && signItems) {
  signInBTn.addEventListener('click', function(e) {
    e.preventDefault();
    signIn.style.display = 'flex';
  });

  signIn.addEventListener('click', function(e) {
    if (e.target === signIn) {
      signIn.style.display = 'none';
    }
  });

  signItems.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameField = signItems.querySelector('input[name="name"]');
    const name = nameField && nameField.value.trim() ? nameField.value.trim() : 'friend';
    const status = document.createElement('p');
    status.className = 'signin_status';
    status.textContent = `Welcome, ${name}! You are signed in.`;
    signItems.appendChild(status);
    setTimeout(() => {
      signIn.style.display = 'none';
      status.remove();
    }, 1200);
  });

  signItems.addEventListener('mouseup', function(e) {
    e.stopPropagation();
  });
}