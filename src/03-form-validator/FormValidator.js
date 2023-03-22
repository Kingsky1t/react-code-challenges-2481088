import { useState } from "react";

export default function FormValidator() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [passwordConfirm, setPasswordConfirm] = useState("");
     const [message, setMessage] = useState("");
     const countToken=()=> {
      var count=0;
      for(var i=0;i<email.length;i++) {
        if(email[i]==='@'){
          count+=1;
        }
      }
      return (count===1);
     }
     const handelSubmit = (e) => {
          e.preventDefault();
          if (!email) {
               setMessage("Email field empty");
          } else if (!password) {
               setMessage("password field empty");
          } else if (!passwordConfirm) {
               setMessage("Confirm password field empty");
          } else if (!countToken()) {
               setMessage("Email must have exactly one @");
          } else if (password.length < 8) {
               setMessage("Password must be 8 characters long");
          } else if (password !== passwordConfirm) {
               setMessage("password does not match");
          } else {
               setMessage("user created");
          }
     };

     return (
          <form onSubmit={handelSubmit}>
               <h2>Sign Up!</h2>
               <label htmlFor='email'>Email</label>
               <input
                    type='text'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
               />
               <label htmlFor='password'>Password</label>
               <input
                    type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
               />
               <label htmlFor='password-confirm'>Confirm Password </label>
               <input
                    type='password'
                    name='password-confirm'
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm}
               />
               {message && <p>{message}</p>}
               <input type='submit' value='Submit' />
          </form>
     );
}
