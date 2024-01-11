import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore,collection, addDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {getStorage,ref,uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
 
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
  const storage = getStorage(app);


  var submit = document.getElementById('submit').addEventListener('click',async()=>{
  var image = document.getElementById('image')
  if(image.files[0]){

    var loading = document.getElementById('loading').src= `${'https://media.giphy.com/media/w7jtVnXxMOq08/giphy.gif'}`
    
  // console.log(image.files[0].name)
  const mountainImagesRef = ref(storage, `images/${image.files[0].name}`)
const uploadTask = uploadBytesResumable(mountainImagesRef, image.files[0]);
  uploadTask.on('state_changed', 
(snapshot) => {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case 'paused':
      console.log('Upload is paused');
      break;
    case 'running':
      console.log('Upload is running');
  }
}, 
(error) => {
 
}, 
() => {
  
  getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    var profile = document.getElementById('getimage').innerHTML= downloadURL
    var name = document.getElementById('name').value
    var father = document.getElementById('fathername').value
    var email = document.getElementById('email').value
    var cnic = document.getElementById('cnic').value
    var course = document.getElementById('course').value
    
    
    
    // uploadBytes(mountainImagesRef,image.files[0]).then((snapshot) => {
    //   console.log('Uploaded a blob or file!',snapshot);
    // });
    
    
    
    
    
        if(!image){
            alert('Select Image')
        }
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
          Image:profile
        });
        console.log("Document written with ID: ", docRef.id);
        console.log('DataSubmit')
        console.log(profile)
    
        window.location = 'home.html'
  });
}
);
}
else(
alert('Complete All Fields')

)
})




  