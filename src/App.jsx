import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [data, setData] = useState({
      name: "",
      email: "",
      pw: "",
      cpw: ""
    });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((predata) => ({ ...predata, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, success } = validateInput(data);
    {
      setSuccess(success);
      setErrors(errors);
      console.log(data);
    } 

  };

  const validateInput = (data) => {
    const errors = {};
    const success = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    } else {
      success.name = "Name is valid";
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    } else {
      success.email = "Email is valid";
    }
    if (!data.pw) {
      errors.pw = 'Password is required';
    } else if (data.pw.length < 6) {
      errors.pw = 'Password must be at least 6 characters';
    } else {
      success.pw = "Password is valid";
    }
    if (!data.cpw) {
      errors.cpw = 'Confirm password is required';
    } else if (data.cpw !== data.pw) {
      errors.cpw = 'Passwords do not match';
    } else {
      success.cpw = "Passwords match";
    }
    return { errors, success };
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>SignUp To SL-IT-CLUB</h1>
        <div>
          <label>Name</label>
          <input name="name" type='text' onChange={handleChange} value={data.name} />
          {errors.name && <p id='error'>{errors.name}</p>}
          {!errors.name && success.name && <p id='success'>{success.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input name="email" type='text' onChange={handleChange} value={data.email} />
          {errors.email && <p id='error'>{errors.email}</p>}
          {!errors.email && success.email && <p id='success'>{success.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input name="pw" type='password' onChange={handleChange} value={data.pw} />
          {errors.pw && <p id='error'>{errors.pw}</p>}
          {!errors.pw && success.pw && <p id='success'>{success.pw}</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input name="cpw" type='password' onChange={handleChange} value={data.cpw} />
          {errors.cpw && <p id='error'>{errors.cpw}</p>}
          {!errors.cpw && success.cpw && <p id='success'>{success.cpw}</p>}
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default App;







