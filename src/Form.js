import React, { useState } from 'react';
import SubmittedForm from './SubmittedForm';


function Form() {
    const [Name, setName] = useState('');
    const [dest, setdest] = useState('');
    const [res, setres] = useState('');
    const [pass, setpass] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
   const [isValid, setIsValid] = useState(false);
   const [email, setEmail] = useState("");
   const [Valid, setValid] = useState(false);
   const [travelDate, setTravelDate] = useState('');
   const [returnDate, setReturnDate] = useState('');
   const [errorMsg, setErrorMsg] = useState('');

   const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

  const handleisChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setValid(validateEmail(inputEmail));
  }

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  }

  const handleChange = (event) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
    setIsValid(validatePhoneNumber(inputPhoneNumber));
  }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        if (new Date(returnDate) < new Date(travelDate)) {
          setErrorMsg('Return date should be after travel date');
          return ;
        }
      };
  if (submitted) {
    return (
      <SubmittedForm Name={Name}  errorMsg={errorMsg} Valid={Valid} email={email} travelDate={travelDate} returnDate={returnDate} phoneNumber={phoneNumber} pass={pass} isValid={isValid} dest={dest} res={res}  />
    );
  }
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={Name}
            required
            onChange={(event)=>setName(event.target.value)}/>
        </label>
        <br />
        <br/>
        <label>
        Email:
        <input type="text" value={email} onChange={handleisChange} />
      </label>
        <br />
        <br/>
        <label>
            Phone
        <input type="tel" value={phoneNumber} onChange={handleChange} />
</label>
        <br />
        <br/>
        <label>
          Passport:
          <input
            type="text"
            required
            value={pass}
            onChange={(event) => setpass(event.target.value)}
          />
        </label>
        <br/>
        <label>
          Travel date:
          <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} />
        </label>
        <br />
        <label>
          Return date:
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </label>
        <br />
        <label>
          Destination
          <input
            type="text"
            value={dest}
            required
            onChange={(event) => setdest(event.target.value)}
          />
        </label>
        <br/>
        <br/>
        <label>
          Reason for Travel
          <input
            type="text"
            value={res}
            required
            onChange={(event) => setres(event.target.value)}
          />
        </label>
        <br/>
        <button type="submit">Register</button>
</form>
    </div>
  );
}

export default Form;