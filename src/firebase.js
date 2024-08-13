import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "<google-api-key>",
  authDomain: "my-ecommerce-app-d7a91.firebaseapp.com",
  projectId: "my-ecommerce-app-d7a91",
  storageBucket: "my-ecommerce-app-d7a91.appspot.com",
  messagingSenderId: "110630133956",
  appId: "1:110630133956:web:a4177955312d089b95e991",
  measurementId: "G-81GFVNDP82"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

