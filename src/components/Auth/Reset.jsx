import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { resetPassword } from '../../redux/actions/profile';
// import toast from 'react-hot-toast';

const Reset = () => {
  const [password, setPassword] = useState();
  // const { loading, message, error } = useSelector(state => state.profile);
  // const params= useParams()
  // console.log(params.token)
  // const dispatch = useDispatch();
  const navigate=useNavigate()
  const submitHandler = e => {
    e.preventDefault();
    // dispatch(resetPassword(params.token,password));
    // navigate("/login")
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch({ type: 'clearError' });
  //   }
  //   if (message) {
  //     toast.success(message);
  //     dispatch({ type: 'clearMessage' });
  //   }
  // }, [dispatch, error, message]);
  
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#090E2A" }}>
  <div className="py-16 w-full max-w-md">
    <form onSubmit={submitHandler} className="mx-auto">
      <h1 className="text-2xl font-bold mb-16 uppercase text-center md:text-left text-white">Reset Password</h1>
      <div className="space-y-8">
        <input 
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:border-yellow-500 focus:outline-none text-white bg-transparent"
          placeholder="Enter new password"
          type="password"
        />
        <button type="submit" className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none">
          Reset Password
        </button>
      </div>
    </form>
  </div>
</div>


  )
}

export default Reset;