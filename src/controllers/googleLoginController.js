import firebase from 'firebase';

function getTheAcessTokenFromGoogleFirebase() {
  return new firebase.auth.GoogleAuthProvider();
}

export { getTheAcessTokenFromGoogleFirebase };
