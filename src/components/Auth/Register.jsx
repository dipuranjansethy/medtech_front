import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { register } from '../../redux/actions/user';

export const fileUploadCss={
    cursor:"pointer",marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC948",
    backgroundColor:"white"
}
const fileUploadStyle={
    "&::file-selector-button":fileUploadCss
}
const Register = () => {
//   const dispatch=useDispatch()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [imagePrev, setImagePrev] = useState()
  const [image, setImage] = useState()
  const changeImageHandeler=(e)=>{
    const file=e.target.files[0];
    const reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        setImagePrev(reader.result);
        setImage(file);
    }
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    // const myForm=new FormData();
    // myForm.append("name",name);
    // myForm.append("email",email);
    // myForm.append("password",password);
    // myForm.append("file",image);

    // dispatch(register(myForm))
  }
  return (
    <div className="min-h-screen flex items-center justify-center " style={{ background: "#090E2A" }}>
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 className="text-2xl font-bold mb-6 uppercase">Registration</h1>

    <form className="w-full" style={{ width: '100%' }} onSubmit={submitHandler}>
      <div className="my-4 flex justify-center">
        <img src={imagePrev} className="w-24 h-24 rounded-full" alt="Avatar Preview" />
      </div>

      <div className="my-4">
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          required
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="abc"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
        />
      </div>

      <div className="my-4">
        <label htmlFor="email" className="block mb-1">Email Address</label>
        <input
          required
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
        />
      </div>

      <div className="my-4">
        <label htmlFor="password" className="block mb-1">Password</label>
        <input
          required
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
        />
      </div>

      <div className="my-4">
        <label htmlFor="chooseAvatar" className="block mb-1">Choose Avatar</label>
        <input
          accept="image/*"
          required
          id="chooseAvatar"
          type="file"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
          onChange={changeImageHandeler}
        />
      </div>

      <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>

      <div className="my-4">
        Already Signed Up?{' '}
        <a href="/login" className="text-yellow-500 hover:underline">
          Login here
        </a>
      </div>
    </form>
  </div>
</div>

  );
};

export default Register;
