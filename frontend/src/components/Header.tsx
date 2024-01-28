import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useAppContext } from "../contexts/AppContext";
import SignOut from "./SignOut";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to={"/"}>Holidays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="px-3 py-2 font-bold text-white hover:bg-blue-500 hover:shadow-lg transition rounded-md"
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="px-3 py-2 font-bold text-white hover:bg-blue-500 hover:shadow-lg transition rounded-md"
              >
                My Hotels
              </Link>
              <SignOut />
            </>
          ) : (
            <>
              <Button variant="primary" onClick={() => navigate("/sign-in")}>
                Sign In
              </Button>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
