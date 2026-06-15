import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Signup() {
    const {
          register,
          handleSubmit,
          formState: { errors },
          } = useForm()
    
        const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
     <div className="max-w-md w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Close Button */}
       <div className="text-right">
      {/* if there is a button in form, it will close the modal */}
       
        
       <Link 
        to="/"
        className="btn btn-sm btn-circle btn-ghost right-2 top-2"
       >
        ✕
        </Link>
    </div>
    <h3 className="font-bold text-lg">Signup</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
     <div className="mt-4 space-y-2"> {/*space between email and login */}
        <span>Name</span>
        <br /> {/*give break,,below type we want email and in place of boc it should be wriiten enetr ur email */}
        <input
          type="text"
          placeholder="Enter your fullname"
          className="w-80 px-3 py-1 border rounded-md outline-none"
          {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
             <span className="text-sm text-red-500">
                This field is required 
                </span>
                )}
    </div>

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
          {errors.email && (
            <span className="text-sm text-red-500">
                This field is required
                </span>
               ) }
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
          {errors.password && (
            <span className="text-sm text-red-500">
                This field is required
                </span>
                )}
    </div>

    {/*Button */}  
    <div className="flex justify-around mt-4"> 
        <button 
        type="submit"
        className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"> 
            Signup
             </button> 
             <div className="text-xl">
                 Have account?{" "} 
                <Link
                   to="/"
                   state={{openLogin: true}}
                  className="underline text-blue-500 cursor-pointer"
             > 
                Login 
                </Link>{" "} {/*we want signup to be pointed by cursor if not logged in ,go to components and create a new component signup and link it here*/}
               </div>{/*we replaced span here with link as we want link to signup */} 
               </div>
               </form>
             
  </div>
 </div>
</div> 

  //all this work could be done manually also "for the field required" but in react we have in built libraries so we use it    
    
  )
}

export default Signup
