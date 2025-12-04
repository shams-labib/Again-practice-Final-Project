import Logo from "../Logo/Logo";
import { Link } from "react-router";
import { AuthContext } from "../../Firebase/AuthContext/AuthContext";
import useAuth from "../../Hooks/useAuth";
import Loding from "../Loading/Loding";

const Navbar = () => {
  const { user, signOutUser, loading } = useAuth();

  const handleSignOutUser = () => {
    signOutUser()
      .then()
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <li>
        <Link to={"/"}>Services</Link>
      </li>
      <li>
        {" "}
        <Link to={"/"}>About Us</Link>
      </li>
      <li>
        <Link to={"/coverage"}>Coverage</Link>
      </li>

      {user && (
        <>
          <li>
            <Link to={"/send-parcel"}>Send Parcel</Link>
          </li>
          <li>
            <Link to={"/dashboard/myParcel"}>My Parcel</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm py-3 ">
      <div className="container mx-auto navbar flex items-center justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <span className="">
            <Logo></Logo>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <Loding></Loding>
          ) : user ? (
            <Link onClick={handleSignOutUser} className="btn">
              Log Out
            </Link>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
          <Link to={"/rider"} className="btn btn-primary text-black ml-2">
            Be a rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
