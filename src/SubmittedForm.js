import React from 'react';

function SubmittedForm({ Name,email,errorMsg,phoneNumber,pass, travelDate,returnDate, dest, res,isValid,Valid }) {
  return (
    <div>
      <h2>Entered Values</h2>
      <form>
        <label>
          Name: {Name}
          </label>
          <br/>
          <br/>
          <label>
        {Valid ? <p> email: {email}</p> : <p>email: Email is invalid</p>}
        </label>
        <br/>
        <label>
        {isValid ?<p> Phone :{phoneNumber}</p> : <p> Phone:Phone number is invalid</p>}
        </label>
        <br/>
        <label>
          Passport:{pass}
          </label>
          <br/>
          <br/>
        <label>
          TravelDate:{travelDate}
          </label>
          <br/>
          <br/>
          Return Date:
        <label>
        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p>:<p>{returnDate}</p>}
          </label>
          <br/>
          <br/>
        <label>
          Destination:{dest}
        </label>
        <br />
        <br/>
        <label>
          Reason for Travel:{res}
        </label>
        <br />
        <br/>
      </form>
    </div>
  );
}

export default SubmittedForm;