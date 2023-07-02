import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.authReducer.loading)
  console.log(loading)

  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState({ firstname: "", lastname: "", username: "", password: "", confirmpass: "" });

  const [conformpass, setConformpass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConformpass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConformpass(true);
    setData({ firstname: "", lastname: "", username: "", password: "", confirmpass: "" });
  };

  return (
    <div className='Auth'>
      <div className='a-left'>
        <img src={Logo} alt='' />
        <div className='Webname'>
          <h1>HSAFX Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* <LogIn/> */}

      {/* sign-up */}
      <div className='a-right'>
        <form className='infoForm authForm' onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log in"}</h3>

          {isSignUp && (
            <div>
              <input onChange={handleChange} type='text' placeholder='First Name' className='infoInput' name='firstname' value={data.firstname} />
              <input onChange={handleChange} type='text' placeholder='Last Name' className='infoInput' name='lastname' value={data.lastname} />
            </div>
          )}

          <div>
            <input onChange={handleChange} type='text' placeholder='Usernames' className='infoInput' name='username' value={data.username} />
          </div>

          <div>
            <input onChange={handleChange} type='password' placeholder='Password' className='infoInput' name='password' value={data.password} />
            {isSignUp && <input onChange={handleChange} type='password' placeholder='Confirm Password' className='infoInput' name='confirmpass' value={data.confirmpass} />}
          </div>

          <span style={{ display: conformpass ? "none" : "block", fontSize: "12px", color: "red" }}>* password isn't same</span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}>
              {isSignUp ? "Already have an account. Login!" : "Don't have account? Signup"}
            </span>
          </div>
          <button className='button infoButton' type='submit' disabled={loading}>
            {loading ?  "loaging..." : isSignUp ? "Sign up" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

// function LogIn() {
//     return (
//       <div className="a-right">
//         <form className="infoForm authForm">
//           <h3>Log In</h3>

//           <div>
//             <input onChange={handleChange}
//               type="text"
//               placeholder="Username"
//               className="infoInput"
//               name="username"
//             />
//           </div>

//           <div>
//             <input onChange={handleChange}
//               type="password"
//               className="infoInput"
//               placeholder="Password"
//               name="password"
//             />
//           </div>

//           <div>
//               <span style={{ fontSize: "12px" }}>
//                 Don't have an account Sign up
//               </span>
//             <button className="button infoButton">Login</button>
//           </div>
//         </form>
//       </div>
//     );
//   }

// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign up</h3>

//         <div>
//           <input onChange={handleChange}
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input onChange={handleChange}
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>

//         <div>
//           <input onChange={handleChange}
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Usernames"
//           />
//         </div>

//         <div>
//           <input onChange={handleChange}
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//           <input onChange={handleChange}
//             type="text"
//             className="infoInput"
//             name="confirmpass"
//             placeholder="Confirm Password"
//           />
//         </div>

//         <div>
//             <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
//         </div>
//         <button className="button infoButton" type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }
