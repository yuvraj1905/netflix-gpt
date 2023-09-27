import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlIH68uUdxr1k0oQ2oVXaypYZfTi0rmxI",
  authDomain: "netflix-gpt-by-yuvraj.firebaseapp.com",
  projectId: "netflix-gpt-by-yuvraj",
  storageBucket: "netflix-gpt-by-yuvraj.appspot.com",
  messagingSenderId: "395503347361",
  appId: "1:395503347361:web:b7cad094881e204bc872e0",
  measurementId: "G-3LC2JX9L60",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
