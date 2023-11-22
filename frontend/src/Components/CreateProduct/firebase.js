import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// import dotenv from 'dotenv'
import env from '../../env'
// dotenv.config()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: env.APIKEY,
  authDomain: env.AUTHDOMAIN,
  projectId: env.PROJECTID,
  storageBucket: env.STORAGEBUCKET,
  messagingSenderId: env.MESSAGINGSENDERID,
  appId: env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)