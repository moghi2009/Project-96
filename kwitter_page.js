
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDAi7wRiv5EkEPMfJYo3CC2Gg4wSj__PVc",
    authDomain: "project-94-e4a99.firebaseapp.com",
    databaseURL: "https://project-94-e4a99-default-rtdb.firebaseio.com",
    projectId: "project-94-e4a99",
    storageBucket: "project-94-e4a99.appspot.com",
    messagingSenderId: "458940241843",
    appId: "1:458940241843:web:5a18d59310facdf8de5dc6",
    measurementId: "G-Z41JQXVB4L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var room_name = localStorage.getItem("room_name");
var user_name = localStorage.getItem("user_name");

function sendmsg(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        //End code
                  }
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}