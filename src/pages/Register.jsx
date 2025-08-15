import React, { use, useState } from "react";
import { Link } from "react-router";


const Register = () => {
  const [error, setError] = useState(null);
  // const { createUser, setUser, setName, setPhotoURL } = use();
  // const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    createUser(email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user);
      setName(name);

      setPhotoURL(photo);
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary">Register on Plant Care Tracker</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Photo URL"
              className="input input-bordered w-full"
              name="photo"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              name="email"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"

              name="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
