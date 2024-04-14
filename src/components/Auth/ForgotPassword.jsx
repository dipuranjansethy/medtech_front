import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { forgetPassword } from '../../redux/actions/profile';
// import { useEffect } from 'react';
// import toast from 'react-hot-toast';
const Forgotpassword = () => {
  const [email, setEmail] = useState('');

//   const { loading, message, error } = useSelector(state => state.profile);

//   const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    // dispatch(forgetPassword(email));
    console.log("forgot password")
  };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({ type: 'clearError' });
//     }
//     if (message) {
//       toast.success(message);
//       dispatch({ type: 'clearMessage' });
//     }
//   }, [dispatch, error, message]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#090E2A" }}>
  <form onSubmit={submitHandler} className="w-full max-w-md -mt-16">
    <h1 className="text-2xl font-bold my-10 uppercase text-center sm:text-left text-gray-100">Forget Password</h1>
    <div className="space-y-8">
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="abc@gmail.com"
        type="email"
        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
      />
      
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded"
      >
        Send Reset Link
      </button>
    </div>
  </form>
</div>

  )
}

export default Forgotpassword