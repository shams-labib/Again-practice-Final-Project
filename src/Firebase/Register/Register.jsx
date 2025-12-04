import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Loding from "../../Components/Loading/Loding";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { createUser, loading, updateUserProfile } = useAuth();

  if (loading) {
    return <Loding></Loding>;
  }

  const handleRegistration = (data) => {
    const photo = data.photo[0];

    createUser(data.email, data.password)
      .then((result) => {
        const formData = new FormData();
        formData.append("image", photo);

        const image_URL = `https://api.imgbb.com/1/upload?&key=${
          import.meta.env.VITE_IMGBB_HOST
        }`;

        axios.post(image_URL, formData).then((res) => {
          const photoImage = res.data.data.url;

          // user create

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoImage,
          };

          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("Mal added");
              navigate("/");
            }
          });

          const updateUser = {
            displayName: data.name,
            photoURL: photoImage,
          };

          updateUserProfile(updateUser)
            .then()
            .catch((err) => {
              console.log(err);
            });
        });
        console.log(result.user);
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>

        <p>
          Already have an account ?{" "}
          <Link
            to={"/login"}
            className="text-blue-400 font-semibold hover:text-blue-700"
          >
            Login Now
          </Link>
        </p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
