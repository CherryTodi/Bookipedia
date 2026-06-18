import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() { //import it in navbar.jsx / also use it in login pat of navbar
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
     
    try {
      setAuthUser({ 
        ...authUser, //purana user toh rahega hi or user null hoajyega 
        user: null, 
      });
      localStorage.removeItem("Users"); //logout kkrke user ko local storage se bhi hatayenge
      
      
      toast.success("Logout successfully");
      
      setTimeout(() => {
          
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
       
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
