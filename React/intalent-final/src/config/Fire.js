import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

//La configuracion traida del firebase
const config = {
    apiKey: "AIzaSyDhR2gU5iqJRUi2utxoByHV6GpwYx1RtyU",
    authDomain: "proyectofinalfirebase-f92ce.firebaseapp.com",
    projectId: "proyectofinalfirebase-f92ce",
    storageBucket: "proyectofinalfirebase-f92ce.appspot.com",
    messagingSenderId: "179386899394",
    appId: "1:179386899394:web:58207553162a126c9c145b",
    measurementId: "G-74QK3SBSS6"
}
const app = initializeApp(config);
export const auth = getAuth(app)
export default app;