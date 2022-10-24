const firebaseConfig = {
    apiKey: "AIzaSyA04rPCt1VOXNEjGMMV3Ppb20jnjA6yCyE",
    authDomain: "projeto93-3614f.firebaseapp.com",
    projectId: "projeto93-3614f",
    storageBucket: "projeto93-3614f.appspot.com",
    messagingSenderId: "266269343273",
    appId: "1:266269343273:web:0b8d55cf707a0baaf12638"
  };

  const app = firebase.initializeApp(firebaseConfig);
  
  function addUser(){
    nomedeusuario = document.getElementById("userName").value 
    console.log(nomedeusuario)
    localStorage.setItem("Username", nomedeusuario)
  }