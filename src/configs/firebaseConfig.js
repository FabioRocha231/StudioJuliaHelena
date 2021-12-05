import {
  ApiKey,
  AppIdFirebase,
  measurementId,
  messagingSenderId,
} from '../../configs';

const firebaseConfig = {
  apiKey: ApiKey,
  authDomain: 'studio-julia-helena.firebaseapp.com',
  projectId: 'studio-julia-helena',
  storageBucket: 'studio-julia-helena.appspot.com',
  messagingSenderId: messagingSenderId,
  appId: AppIdFirebase,
  measurementId: measurementId,
};

export { firebaseConfig };
