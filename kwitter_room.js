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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.Id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
    room_name = document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
    redirectToRoomName();
}
function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";   
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
}
function getData(){firebase.database().ref("/"+room_name).on('value',function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKiey=childSnapshot.key;childData=childSnapshot.val; if(childKey!="purpose"){
    firebase_message_id=childKey;
    message_data=childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name=message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    name_with_tag=
}})
}
}