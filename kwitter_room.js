
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

var user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoom(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

