import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from 'sweetalert2'

const Login = () => {
  const { SignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"; // যেখানে থেকে ইউজার এসেছিল, না থাকলে হোম

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    SignIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: `${user.displayName || "User"} successfully logged in!`,
          icon: "success",
          confirmButtonText: "OK"
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again"
        });
      });
  }

  return (
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
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p><small><span className="text-blue-400">New here? </span><Link to="/signup">Create an Account</Link></small></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
