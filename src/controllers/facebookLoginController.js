import firebase from 'firebase';

function getCredential(token) {
  return firebase.auth.FacebookAuthProvider.credential(token);
}

async function authenticateInFirebaseWithFacebook(facebookCredential) {
  return await firebase
    .auth()
    .signInWithCredential(facebookCredential)
    .then((userid) => {
      return userid;
    })
    .catch((e) => {
      console.error(e);
    });
}

async function signInWithFacebookFunction(token) {
  const facebookCredential = getCredential(token);
  const authentication = await authenticateInFirebaseWithFacebook(
    facebookCredential,
  );
  return authentication;
}

export { signInWithFacebookFunction };
