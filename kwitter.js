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
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    window.location = "kwitter_room.html";
}
