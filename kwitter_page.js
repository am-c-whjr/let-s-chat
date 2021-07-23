var firebaseConfig = {
    apiKey: "AIzaSyBQKwVnfA2t82IjiWV_1467lp1mMkCsgMQ",
    authDomain: "kwitter-32363.firebaseapp.com",
    databaseURL: "https://kwitter-32363-default-rtdb.firebaseio.com",
    projectId: "kwitter-32363",
    storageBucket: "kwitter-32363.appspot.com",
    messagingSenderId: "621357410515",
    appId: "1:621357410515:web:4f733d4a91cf9c435dcc26",
    measurementId: "G-RMYKVV7MF3"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}
