import './App.css';
import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const CLIENT_ID = "153540751957-lteb6jjfhiruolm01qvvoq9i373hr5s2.apps.googleusercontent.com"; 

function App() {
  const [signup, setsignup] = useState("signup");
  const [visible, setVisible] = useState(false);
  const [dataform, setdataform] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    branch: "",
    year: "",
    number: "",
    address: ""
  });

  const changehandler = (e) => {
    setdataform({ ...dataform, [e.target.name]: e.target.value });
  };

  // ✅ Improved ID & Email Validation
  const validateInputs = () => {
    const idPattern = /^N\d{6}$/;  
    const emailPattern = /^n(\d{6})@rguktn\.ac\.in$/;

    if (!idPattern.test(dataform.id)) {
      alert("Invalid ID format! It should be 'N' followed by 6 digits (e.g., N123456).");
      return false;
    }

    const emailMatch = dataform.email.match(emailPattern);
    if (!emailMatch) {
      alert("Invalid Email format! Example: n123456@rguktn.ac.in");
      return false;
    }

    const idNumbers = dataform.id.substring(1);
    const emailNumbers = emailMatch[1];

    if (idNumbers !== emailNumbers) {
      alert("ID and Email numbers do not match! ID 'N123456' must match Email 'n123456@rguktn.ac.in'.");
      return false;
    }

    return true;
  };

  // ✅ Improved Signup Function
  const sign = async () => {
    if (!validateInputs()) return;
    if (!dataform.password) {
      alert("Password is required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(dataform),
      });

      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        setsignup("login");
      } else {
        alert(responseData.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert(error.message);
    }
  };

  // ✅ Improved Login Function
  const login = async () => {
    if (!dataform.email || !dataform.password) {
      alert("Email and Password are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(dataform),
      });

      if (!response.ok) {
        throw new Error(`Login failed! Server returned ${response.status}`);
      }

      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        alert("Login Successful!");
      } else {
        alert(responseData.errors || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
    }
  };

  // ✅ Improved Google Sign-In Handling
  const handleGoogleLogin = async (credentialResponse) => {
    const { credential } = credentialResponse;
    if (!credential) {
      alert("Google Login Failed: No token received.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/google-login", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ token: credential })
      });

      if (!res.ok) {
        throw new Error(`Google login failed! Server returned ${res.status}`);
      }

      const data = await res.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        alert("Google Login Successful!");
      } else {
        alert("Google Login Failed: " + (data.error || "Unknown error."));
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      alert(error.message);
    }
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App">
        {signup === "signup" ? (
          <>
            <h1>Signup</h1>
            <input type="text" placeholder="Enter Your College Id" name="id" value={dataform.id} onChange={changehandler} style={{ width: "300px" }} />
            <input type="text" placeholder="Enter Your Name" name="name" value={dataform.name} onChange={changehandler} style={{ width: "300px" }}/>
            <input type="email" placeholder="Enter Email" name="email" value={dataform.email} onChange={changehandler} style={{ width: "300px" }}/>

            
            <div  style={{"display":"flex",justifyContent:"space-between"}}>
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={dataform.password}
                onChange={changehandler}
                style={{ width: "300px" ,"position":"relative","left":"17px"}}/>
                <button onClick={() => setVisible(!visible)}  style={{position: "relative",
                left: "-10px",
                cursor: "pointer"}}>
                 {visible ? "🔒" : "👁"}
                  </button>
            </div>

            <select name="branch" value={dataform.branch} onChange={changehandler} style={{ width: "300px" }}>
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
              <option value="CHEM">CHEM</option>
              <option value="MME">MME</option>
            </select>
            <select name="year" value={dataform.year} onChange={changehandler} style={{ width: "300px" }}>
              <option value="">Select Year</option>
              <option value="P1">PUC1</option>
              <option value="P2">PUC2</option>
              <option value="E1">E1</option>
              <option value="E2">E2</option>
              <option value="E3">E3</option>
              <option value="E4">E4</option>
            </select>
            <input type="text" placeholder="Enter your phone number" name="number" value={dataform.number} onChange={changehandler} style={{ width: "300px" }} />
            <input type="text" placeholder="Enter your address" name="address" value={dataform.address} onChange={changehandler}  style={{ width: "300px" }}/>

            <p>Already have an account? <span onClick={() => setsignup("login")} style={{"color":"blue","cursor":"pointer"}}>Login</span></p>
            <button onClick={sign} >Signup</button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <input type="email" placeholder="Enter Email" name="email" value={dataform.email} onChange={changehandler} style={{ width: "300px" }} />
            <div style={{"display":"flex",justifyContent:"space-between","position":"relative","left":"13px"}}>
              <input type={visible ? "text" : "password"} placeholder="Enter Password" name="password" value={dataform.password} onChange={changehandler} style={{width:"300px"}}/>
              <button onClick={() => setVisible(!visible)} style={{position: "relative",
                left: "-27px",
                cursor: "pointer"}}>
                 {visible ? "🔒" : "👁"}
              </button>
            </div>
            <p>Don't have an account? <span onClick={() => setsignup("signup")} style={{"color":"blue","cursor":"pointer"}}>Signup</span></p>
            <button onClick={login} >Login</button>
            <GoogleLogin onSuccess={handleGoogleLogin} onError={() => alert("Google Login Failed")} />
          </>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
