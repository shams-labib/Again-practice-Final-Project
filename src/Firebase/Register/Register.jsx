import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Loding from "../../Components/Loading/Loding";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, loading } = useAuth();

  //   আগামীকাল Update user profile mal করতে হবে

  if (loading) {
    return <Loding></Loding>;
  }

  const handleRegistration = (data) => {
    const photo = data.photo[0];

    createUser(data.email, data.password)
      .then((result) => {
        const UpdateInfo = {
          displayName: data.name,
        };

        updateUserProfile(UpdateInfo)
          .then((mal) => {
            console.log(mal);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl font-bold">Register Now</h1>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input outline-none"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Please enter your name</p>
            )}
            <label className="label">Photo</label>
            <input
              {...register("photo", { required: true })}
              type="file"
              className="file-input outline-none"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Please enter your name</p>
            )}
            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input outline-none"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Please provide your email</p>
            )}
            <label className="label">Password</label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              })}
              type="password"
              className="input outline-none"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Please provide your password</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be at least 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">Password must be strong like you</p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
