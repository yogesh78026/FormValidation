import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [gender, setGender] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [dob, setDob] = useState("")
  const [degree, setDegree] = useState("")
  const [university, setUniversity] = useState("")
  const [password, setPassword] = useState("")
  // all errors
  const [username, setUsername] = useState("")
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")
  const [genderError, setGenderError] = useState("")
  const [dobError, setDobError] = useState("")
  const [degreeError, setDegreeError] = useState("")
  const [universityError, setUniversityError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [emptyError, setEmptyError] = useState("")

  const resetErrorDefault = () => {
    setNameError("")
    setPhoneNumberError("")
    setEmailError("")
    setPasswordError("")
    setGenderError("")
    setDobError("")
    setDegreeError("")
    setUniversityError("")
    setEmptyError("")
  }

  const validate = () => {
    if (name === "" || email === "" || gender === "" || phoneNo === "" || password === "" || dob === "" || degree === "" || university === "") {
      setEmptyError("All Fields are mandatory")
      setUsername("")
      return false
    }
    if (!name.match(/^[A-Za-z0-9- ]+$/)) {
      setNameError("Name is not AlphaNumeric")
      setUsername("")
      return false
    }
    if (!email.includes("@")) {
      setEmailError("Email Must contain @")
      setUsername("")
      return false
    }
    if (!gender.match(/male|female|other/i)) {
      setGenderError("Please select correct Gender")
      setUsername("")
      return false
    }
    if (!phoneNo.match(/^[0-9]+$/)) {
      setPhoneNumberError("Phone no. must contain only numbers")
      setUsername("")
      return false
    }
    if (password.length < 6) {
      setPasswordError("Password length must be greater than 6")
      setUsername("")
      return false
    }
    if (!degree.match(/^[A-Za-z0-9- ]+$/)) {
      setDegreeError("Name is not AlphaNumeric")
      setUsername("")
      return false
    }
    if (!university.match(/^[A-Za-z0-9- ]+$/)) {
      setUniversityError("Name is not AlphaNumeric")
      setUsername("")
      return false
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    resetErrorDefault()
    const isValid = validate()
    if (isValid) {
      setName("")
      setEmail("")
      setGender("")
      setPhoneNo("")
      setPassword("")
      setDegree("")
      setDob("")
      setUniversity("")
      resetErrorDefault()
    }
    setUsername(email.substr(0, email.indexOf("@")))
  }

  return (
    <>
      <h1 className='header'>Student Registration Form</h1>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label' htmlFor='name'>Student Name: </label>
            <input className='form_input'  type="text" placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
            <span>{nameError}</span>
          </div>

          <div>
            <label className='label' htmlFor='email'>Email Id: </label>
            <input className='form_input'  type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
            <span>{emailError}</span>
          </div>

          <div>
            <label className='label' htmlFor='phoneNo'>Phone No.: </label>
            <input className='form_input'  type="text" placeholder='Phone No' value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} /><br />
            <span>{phoneNumberError}</span>
          </div>

          <div>
            <label className='label' htmlFor='gender'>Gender: </label>
            <select className='form_input' name='Gender' value={gender} onChange={(e) => { setGender(e.target.value) }}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select><br />
            <span>{genderError}</span>
          </div>

          <div>
            <label className='label' htmlFor='dob'>Date Of Birth: </label>
            <input className='form_input'  type="date" placeholder='Enter DOB' value={dob} onChange={(e) => { setDob(e.target.value) }} /><br />
            <span>{dobError}</span>
          </div>

          <div>
            <label className='label' htmlFor='degree'>Degree Name: </label>
            <input className='form_input'  type="text" placeholder='Degree Name' value={degree} onChange={(e) => { setDegree(e.target.value) }} /><br />
            <span>{degreeError}</span>
          </div>

          <div>
            <label className='label' htmlFor='university'>University Name: </label>
            <input className='form_input'  type="text" placeholder='University name' value={university} onChange={(e) => { setUniversity(e.target.value) }} /><br />
            <span>{universityError}</span>
          </div>

          <span>{emptyError}</span><br />
          <input className='button'  type="submit" value="Submit Form" /><br />
        </form>

        </div>
    </>
  );
}

export default App;
