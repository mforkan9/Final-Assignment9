import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { ContextUse } from '../../App';
import { Redirect, useHistory, useLocation } from 'react-router';
import './Login.css'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const {value,email1,password2,name6,emailError4,passwordError5} = useContext(ContextUse)
  const [email,setEmail] = email1;
  const [password,setPassword] = password2;
  const [loggedInUser,setLoggedInUser] = value;
  const [emailError,setEmailError] = emailError4;
  const [passwordError,setPasswordError] = passwordError5
  const [name,setName] = name6;
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSignIn:false,
    name:'',
    email:'',
    password:''
  })
                  //YouTube resource........
  const clearInputs = () =>{
    setEmail('')
    setPassword('')
  }

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    const {email,displayName,emailVerified} = user;
    const loginUser = {email:email,name:displayName,isSignIn:emailVerified}
    setLoggedInUser(loginUser)
    history.replace(from)
    console.log(user)
  })
  .catch((error) => {
    var errorMessage = error.message;
    setEmailError(errorMessage)
    setPasswordError(errorMessage)
  });
  }

  const handleSignUp = () =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    const {email,displayName} = user;
    const signUpUser = {email:email,name:displayName}
    setLoggedInUser(signUpUser)
    history.replace(from)
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setEmailError(errorMessage,errorCode)
    setPasswordError(errorMessage,errorCode)
  })
  }

  const authListener = () =>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('')
      }
    });
  }

  useEffect(() =>{
    authListener()
  },[])

              //Google sign in method.........

    const handleGoogleSignIn = () =>{
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    const {displayName,email,emailVerified} = user;
    const signInUser = {name:displayName,email,isSignIn:emailVerified}
    setLoggedInUser(signInUser)
    history.replace(from)
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setEmailError(errorMessage)
    setPasswordError(errorMessage)
  });
    }

            //its not working

  // const handleSubmit = (event) =>{
   
  //   if (user.email && user.password) {
  //    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  //     .then(res =>{
  //       console.log('responser',res)
  //     })
  //    .catch(function (error) {
  //       // Handle Errors here.
  //       var errorMessage = error.message;
  //       console.log('erorrrrr',errorMessage)
  //   });
  // console.log('submit')
  // event.preventDefault();
  //   }
    
  // }

  // const handleBlur = (e) => {
  //   let isFormValid;
  //   if (e.target.name === 'email') {
  //     isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
  
  //   }
  //   if (e.target.name === 'password') {
  //      isFormValid = /[A-Z]/.test(e.target.value) &&
  //     /[a-z]/.test(e.target.value) &&
  //     /[0-9]/.test(e.target.value) &&
  //     e.target.value.length > 4;
  //   }
  //   if (isFormValid) {
  //      const newUser = {...user}
  //     newUser[e.target.name] = [e.target.value]
  //     setUser(newUser)
  //   }
  // }
  return (
    <div className='App'>
        {/* <h1>this is login form</h1>
        <input type="text" autoFocus required value={name} onChange={(e) =>setName(e.target.value)} placeholder='name'/>
        <input type="text" autoFocus required value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <br/>
            <input type="password" name="" id="" autoFocus required value={password} onChange = {(e) =>setPassword(e.target.value)} /> 
            <br/>
            <button onClick={handleSignUp}>signUp</button>
            <button onClick={handleLogin}>login</button>
        <form onSubmit={handleSubmit}>
        <input onBlur={handleBlur} autoFocus type="text" name='email' required/>
        <br/>
        <input onBlur={handleBlur} autoFocus type="password" name="password" id="" required/>
        <br/>
        <input type="submit" value="submit"/>
        </form>
        <button onClick={handleGoogleSignIn}>sign in</button> */}

        <div id="container">
  
  <div id="cover">
      
      <h1 class="sign-up">Hello, Friend!</h1>
      <p class="sign-up">Enter your personal details<br/> and start a journey with us</p>
      <a class="button sign-up" href="#cover">Sign Up</a>
      
      <h1 class="sign-in">Welcome Back!</h1>
      <p class="sign-in">To keep connected with us please<br/> login with your personal info</p>
      <br/>
      <a class="button sub sign-in" href="#">Sign In</a>
  </div>

  <div id="login">
      <h1>Sign In</h1>
      <img class="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png"/>
      <img onClick={handleGoogleSignIn} class="social-login" src="https://www.flaticon.com/svg/static/icons/svg/2875/2875404.svg"/>
      <img class="social-login" src="https://www.flaticon.com/svg/static/icons/svg/733/733579.svg"/>
      <p>or use your email account:</p>
      
      <input type="email" placeholder="Email" autocomplete="off" autoFocus required value={email} onChange={(e) =>setEmail(e.target.value)}/><br/>
      <input type="password" placeholder="Password" autocomplete="off" autoFocus required value={password} onChange = {(e) =>setPassword(e.target.value)}/>
      <br/>
      <p>{passwordError}</p>
      <button className='submit-btn' onClick={handleLogin}>Sign In</button>
      
  </div>

  <div id="register">
      <h1>Create Account</h1>
      <img class="social-login" src="https://image.flaticon.com/icons/png/128/59/59439.png" />
     <img onClick={handleGoogleSignIn} class="social-login" src="https://www.flaticon.com/svg/static/icons/svg/2875/2875404.svg"/>
      <img class="social-login" src="https://www.flaticon.com/svg/static/icons/svg/733/733579.svg"/>
      <p>or use your email for registration:</p>
      
      <input type="text" placeholder="Name" autoComplete='off' autoFocus required value={name} onChange={(e) =>setName(e.target.value)}/>
      <br/>
      <input type="email" placeholder="Email"  autoFocus required value={email} onChange={(e) =>setEmail(e.target.value)}/>
      <br/>
      <input type="password" placeholder="Password"  autoFocus required value={password} onChange = {(e) =>setPassword(e.target.value)}/>
      <br/>
      <button class="submit-btn" onClick={handleSignUp}>Sign Up</button>
      
  </div>

</div> 
    </div>
  );
};

export default Login;