import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      } = useForm()

    const onSubmit = (data) => console.log(data);
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
     <dialog id="login_modal" className="modal">
      <div className="modal-box">
      {/* if there is a button in form, it will close the modal */}
       <button 
       type="button"
       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
       onClick={() => document.getElementById("login_modal").close()}
       >
        ✕
        </button>
    <h3 className="font-bold text-lg">Login</h3>

    {/*Email */}
    <div className="mt-4 space-y-2"> {/*space between email and login */}
        <span>Email</span>
        <br /> {/*give break,,below type we want email and in place of boc it should be wriiten enetr ur email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-80 px-3 py-1 border rounded-md outline-none"
          {...register("email", { required: true })}
          />
          <br />
          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
    </div>

     {/*Password */}
     <div className="mt-4 space-y-2"> {/*space between email and login */}
        <span>Password</span>
        <br /> {/*give break,,below type we want email and in place of boc it should be wriiten enetr ur email */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-80 px-3 py-1 border rounded-md outline-none"
          {...register("password", { required: true })}
          />
          <br />
          {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>

    {/*Button */}  
    <div className="flex justify-around mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        {/* Password */}
        <button 
        type="submit"
        className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
            Login
        </button>
        </form>
        <p>
            Not registered?{" "} {/*we use span as we need link there for signup */}
             <Link
               to="/signup"
               className="underline text-blue-500 cursor-pointer"
             >
              Signup
              </Link> {/*we want signup to be pointed by cursor if not logged in ,go to components and create a new component signup and link it here*/}
        </p>{/*we replaced span here with link as we want link to signup */}

    </div>
      
  </div>
</dialog>

    </div>
  )
}

export default Login