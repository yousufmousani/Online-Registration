import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore,collection,getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCSFZoRtI3nVJbD3uEpb6liKxNXDuiYXmY",
    authDomain: "socialapp-96e89.firebaseapp.com",
    projectId: "socialapp-96e89",
    storageBucket: "socialapp-96e89.appspot.com",
    messagingSenderId: "492786938715",
    appId: "1:492786938715:web:3c40bcb98981fc24a2607e",
    measurementId: "G-94S7SKY0RK"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);




let getDiv = document.getElementById('user')
let name = document.getElementById('name')
let fathername = document.getElementById('fathername')
let email = document.getElementById('email')
let course = document.getElementById('course')
let cnic = document.getElementById('cnic')
const userdata = await getDocs(collection(db, "Registration"));
    
    userdata.forEach((doc) => {
      name.innerHTML = `<div> Student  Name : ${doc.data().name}</div>`
    });
    userdata.forEach((doc) => {
        fathername.innerHTML =`<div> Father Name : ${doc.data().fathername}</div>
        
        `
      });
      userdata.forEach((doc) => {
        email.innerHTML = `<div> Email : ${doc.data().email}</div>
        `
      });
      userdata.forEach((doc) => {
        course.innerHTML =`<div> Course : ${doc.data().Course}</div>
        `
      });
      userdata.forEach((doc) => {
        cnic.innerHTML =`<div> CNIC :${doc.data().CNIC}</div>
        `
      });

//     const querySnapshot = await getDocs(collection(db, "Registration"));
// querySnapshot.forEach((doc) => {
//     name.innerHTML = `<div>${doc.data().name}</div>`
  
//   console.log(doc.id, " => ", doc.data());
// });
