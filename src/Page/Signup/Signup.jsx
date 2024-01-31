import { useContext } from "react";
import {AuthContext} from '../../Provider/Authprovider'
import { updateProfile } from "firebase/auth";
const Signup = () => {
  const { user, createUser}=useContext(AuthContext);
  console.log(user);
  const handleregister=(event)=>{

    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      updateProfile(result.user, {
        displayName: form.name.value
      })
      form.reset()
    })
    .catch(error=>{
      console.log(error);
    })
  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name"  name="name"className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;







// const {user,  createUser}=useContext(AuthContext);

// console.log(user);
// console.log(createUser);

// const handleregister=(event)=>{

// event.preventDefault();
//  const form=event.target;
//  const name=form.name.value;
//  const email=form.email.value;
//  const password=form.password.value;
//  console.log(name,email,password);
//  createUser(email,password)
//   .then(result=>{
//     const loggeduser=result.user;
//     console.log(loggeduser);
//     form.reset("")
//  })
//  .catch(error=>{

//     console.log(error);
//  })

// }