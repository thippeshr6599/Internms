import React from 'react'
import Landingpage from "./Landingpage/Landingpage"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginmainpage from "./Loginpage/Loginmainpage"
import Twostepverification from './Loginpage/Twostepverification'
import Emailverification from './Loginpage/Emailverification'
import Sucesslogin from './Loginpage/Sucesslogin'
import Mobileverification from './Loginpage/Mobileverification'
import Forgotpassword from './Loginpage/Forgotpassword'
import Forgototp from './Loginpage/Forgototp'
import Setnewpassword from './Loginpage/Setnewpassword'
import Passresetsucess from './Loginpage/Passresetsucess'
import Createaccount from './Signuppage/Createaccount'
import Mentor from './Signuppage/Mentor'
import Intern from './Signuppage/Intern'
import Company from './Signuppage/Company'


export default function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/Loginmainpage" element={<Loginmainpage/>}/>
        <Route path="/Twostepverification" element={<Twostepverification/>}/>
        <Route path="/Emailverification" element={<Emailverification/>}/>
        <Route path="/Sucesslogin" element={<Sucesslogin/>}/>
        <Route path="/Mobileverification" element={<Mobileverification/>}/>
        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        <Route path="/Forgototp" element={<Forgototp/>}/>
        <Route path="/Setnewpassword" element={<Setnewpassword/>}/>
        <Route path="/Passrestsucess" element={<Passresetsucess/>}/>
        <Route path="/Createaccount" element={<Createaccount />} />
        <Route path="/Mentor" element={<Mentor />} />
        <Route path="/Intern" element={<Intern />} />
        <Route path="/Company" element={<Company />} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}
