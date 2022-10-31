
const firebaseConfig = {
    apiKey: "AIzaSyA04rPCt1VOXNEjGMMV3Ppb20jnjA6yCyE",
    authDomain: "projeto93-3614f.firebaseapp.com",
    projectId: "projeto93-3614f",
    storageBucket: "projeto93-3614f.appspot.com",
    messagingSenderId: "266269343273",
    appId: "1:266269343273:web:0b8d55cf707a0baaf12638"
  };

  const app = firebase.initializeApp(firebaseConfig)

var nomeUsuario = localStorage.getItem("Username")
console.log(nomeUsuario)
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + nomeUsuario + "!";


 function addRoom(){
  
var nomedasala = document.getElementById("roomName").value

  firebase.database().ref("/").child(nomedasala).update({
    purpose : "adicionar nome de sala"
  })

  localStorage.setItem("nomesala", nomedasala)
  window.location = "kwitterpage.html"
 }

 function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  roomNames = childKey;
  console.log("Nome da Sala - " + roomNames);
 row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

   
    