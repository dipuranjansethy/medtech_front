import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submitHandler=(e)=>{
        e.preventDefault();
        // dispatch(login(email,password));
        console.log(submitted)
      }
  return (
    <>
    <div class="container h-screen mx-auto flex items-center justify-center " style={{ background: "#090E2A" }}>
  <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 class="text-2xl font-bold mb-6">Welcome to careconnect</h1>
    <form onSubmit={submitHandler} class="w-full">
      <div class="mb-4">
        <label for="email" class="block mb-1">Email Address</label>
        <input
          required
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
          type="email"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-1">Password</label>
        <input
          required
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          type="password"
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
        />
      </div>
      <div class="mb-4">
        <a href="/forgetpassword" class="text-sm text-yellow-500 hover:underline">Forget Password</a>
      </div>
      <button type="submit" class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      <div class="mt-4">
        New User <a href="/register" class="text-yellow-500 hover:underline">Sign Up Here</a>
      </div>
    </form>
  </div>
</div>
</>

  )
}

export default Login