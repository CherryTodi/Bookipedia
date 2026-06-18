import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      } = useForm();

    const onSubmit =async (data) =>{ //console.log(data);
      const  userInfo={ //here we get the the user data after this we need to call api
        email:data.email,
        password:data.password,
      };
      //for api
       await axios.post("http://localhost:4001/user/login", userInfo)//(api ka url mai userinfo se information store karana hai)
      .then((res) => { //promise//either accept or reject
      console.log(res.data);
      if (res.data) {  //agar response  data hai toh signup kardenge successfully
        toast.success("Logged in Successfully");
        document.getElementById("login_modal").close();
        setTimeout(()=>{
           window.location.reload();//page apne aap reload hojaye
           localStorage.setItem("Users",JSON.stringify(res.data.user));//we want the message to be seen in local storage without any message
        },1000);
         
      }
     
    }).catch((err) => { //to show error
      if(err.response){
      console.log(err);  //to display meesage for incorrect login //message is brought form backend
      toast.error("Error: " + err.response.data.message );
      setTimeoout(()=>{},2000);
      }

    });
    };
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