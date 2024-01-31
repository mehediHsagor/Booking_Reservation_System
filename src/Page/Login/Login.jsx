import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from 'sweetalert2'



const Login = () => {
  const {SignIn}=useContext(AuthContext);
  const naviagete = useNavigate();
  
  const handleLogin=event=>{

    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    SignIn(email,password)
    .then(result=>{
      const user=result.user;
      Swal.fire({
        title: `${user.displayName} is successfully logged in`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed){
          naviagete('/');
        }
      });
    })

  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col md:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
    </div>
   
    <p><small>new here?<Link to="/signup">create an  Account</Link></small></p> 
  </div>
</div>
        </div>
    );
};

export default Login;


// const loginhandle=event=>{

//   event.preventDefault();
//   const form=event.target;
//   const email=form.email.value;
//   const password=form.password.value;
//   console.log(email,password);
//   signIn(email,password)
//   .then(result =>{
// const user= result.user;
// console.log(user);

// Swal.fire({
// title: "user login succesfully",
// showClass: {
//   popup: `
//     animate__animated
//     animate__fadeInUp
//     animate__faster
//   `
// },
// hideClass: {
//   popup: `
//     animate__animated
//     animate__fadeOutDown
//     animate__faster
//   `
// }
// });
// navigate(from, { replace: true });


//   })
