const firebaseConfig = {
  apiKey: "AIzaSyAiSmK5Z7G42UofoI6qwsttf4xmX7teCd0",
  authDomain: "database-2dd20.firebaseapp.com",
  databaseURL: "https://database-2dd20-default-rtdb.firebaseio.com",
  projectId: "database-2dd20",
  storageBucket: "database-2dd20.appspot.com",
  messagingSenderId: "612215052700",
  appId: "1:612215052700:web:269ce1aec1fec2a6e59059",
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
