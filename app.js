import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
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


var submit = document.getElementById('submit').addEventListener('click',async()=>{
    var name = document.getElementById('name').value
    var father = document.getElementById('fathername').value
    var email = document.getElementById('email').value
    var cnic = document.getElementById('cnic').value
    var course = document.getElementById('course').value
    // var image = document.getElementById('image').value


    // if(!image){
    //     alert('Select Image')
    // }
    if(!name){
        alert('Enter Your Name')
    }
    if(!father){
        alert('Enter Your Father Name')
    }
    if(!email){
        alert('Enter Your Email')
    }
    if(!cnic){
        alert('Enter CNIC Number')
    }
    if(!course){
        alert('Select The Course')
    }

    
    const docRef = await addDoc(collection(db, "Registration"), {
      name: name,
      fathername :father,
      email:email,
      CNIC:cnic,
      Course:course,
    });
    console.log("Document written with ID: ", docRef.id);
    console.log('DataSubmit')

    window.location = 'home.html'
})




  