import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNXxaAr24_d2qqkVJUjNL_1hoAPrIIySs",
  authDomain: "recipecast-bootcamp.firebaseapp.com",
  projectId: "recipecast-bootcamp",
  storageBucket: "recipecast-bootcamp.appspot.com",
  messagingSenderId: "183858694504",
  appId: "1:183858694504:web:94ef9ecd857068c41e2edd",
};

const app = initializeApp(firebaseConfig);

export { app };
