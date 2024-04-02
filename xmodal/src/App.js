import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const dobRef = useRef(null);
  const formRef = useRef(null);

  const openFormClick = ()=>{
    setModalDisplay(true);
  }

  const handleClickOutside= (e)=>{
    if(formRef.current && !formRef.current.contains(e.target)){
      setModalDisplay(false);
    }
  }

  const handleSubmit =(e)=>{
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const dob = dobRef.current.value;

    if (!username || !email || !phone || !dob) {
      alert("Please fill in all fields.");
      return;
    }

    if(!email.includes("@")){
      alert("Invalid email");
      return;
    }

    if(!/^\d{10}$/.test(phone) ){
      alert("Invalid phone number");
      return;
    }

    const today= new Date()
    const selectedDate = new Date(dob);
    if(selectedDate>today){
      alert("Invalid date of birth");
      return;
    }
    e.preventDefault();
    setModalDisplay(false);

  }

  return (
    <div className='App' onClick={handleClickOutside}>
      <h1>User Details Modal</h1>
      <button className='formbutton'
       onClick={openFormClick}>Open Form</button>
      {modalDisplay && (
        <div className='modal' onClick={handleClickOutside}>
            <div className='modal-content' ref={formRef}>
              <form onSubmit={handleSubmit}>
                <h3>Fill Details</h3>
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" ref={usernameRef} required/>
                <label htmlFor="email">Email Address:</label>
                <input id="username" type="email" ref={emailRef} required/>
                <label htmlFor="phonenumber">Phone Number:</label>
                <input id="phonenumber" type="tel" ref={phoneRef} required/>
                <label htmlFor="dob">Date of Birth:</label>
                <input id="dob" type="date" ref={dobRef} required/>
                <button type='submit' className='submit-button'
                onClick={handleSubmit}>Submit</button>
                </form>
              </div>
          </div>
      )}
    </div>
  );
}

export default App;
