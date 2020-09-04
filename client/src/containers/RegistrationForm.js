import React, { useState } from "react";
import axios from "axios";
import RegistrationFormControls from "../components/RegistrationFormControls";

const RegistrationForm = () => {
  const [registrationDetails, setRegistrationDetails] = useState({
    name: "",
    surname: "",
    email: "",
    idNumber: "",
    homeAddress: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationDetails({ ...registrationDetails, [name]: value });
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
       axios.post('http://localhost:5000/register',registrationDetails)
      .then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
  };

  return (
    <div>
      <RegistrationFormControls
        changed={(event) => handleChange(event)}
        submit={(event) => handleSubmit(event)}
        state={registrationDetails}
      />
    </div>
  );
};

export default RegistrationForm;
