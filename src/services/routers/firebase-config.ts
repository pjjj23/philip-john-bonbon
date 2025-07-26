import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  set,
  serverTimestamp,
} from "firebase/database";

document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAT2BKiyAGY_8O2sChuFEvR7DxCjvS72VY",
    authDomain: "pj-bonbon.firebaseapp.com",
    databaseURL: "https://pj-bonbon-default-rtdb.firebaseio.com",
    projectId: "pj-bonbon",
    storageBucket: "pj-bonbon.appspot.com", // fix typo: should be .appspot.com
    messagingSenderId: "811730169698",
    appId: "1:811730169698:web:c56f8654410a8b5601063b",
  };

  // Initialize Firebase app and get database
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const form = document.getElementById("contactForm") as HTMLFormElement | null;

  form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput") as HTMLInputElement;
    const emailInput = document.getElementById("emailInput") as HTMLInputElement;
    const messageInput = document.getElementById("messageInput") as HTMLTextAreaElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    const now = new Date();
    const formattedTimestamp = formatTimestamp(now);

    const userContactRef = push(ref(database, "UsersContactMe"));

    set(userContactRef, {
      Name: name,
      Email: email,
      Message: message,
      TimeStamp: serverTimestamp(),
      FormattedTimeStamp: formattedTimestamp,
    })
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("There was an error sending your message. Please try again.");
      });
  });

  function formatTimestamp(date: Date): string {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
  }
});
