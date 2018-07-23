const outButton = document.getElementById('signOut');
const publicButton = document.getElementById('buttonPost');
const selectPrivacy = document.getElementById('privacy');
const publications = document.getElementById('publications');

outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
});

publicButton.addEventListener('click', () => {
  let userId = firebase.auth().currentUser.uid;
  console.log(userId);
   firebase.database().ref('/users/' + userId).once('value')
    .then((user) => {
    const nameUser = (user.val().username);
    let newPost = document.getElementById('post').value;
    let state = selectPrivacy.value;
    if (selectPrivacy.value != '0'){
      writeNewPost(userId, nameUser, newPost, state);
      document.getElementById('post').value = '';
      document.getElementById('privacy').value = '0';
      publications.innerHTML = `
        <div class='send-post'>
          <p>Nombre: ${nameUser}</p>
          <p>${newPost}</p>
        </div>
      `
    } else {
      alert('Selecciona privacidad');
    }
  })
})


