import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useAppContext } from "../contexts/AppContext";

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
              <Button
                variant="primary"
                onClick={() => navigate("/my-bookings")}
              >
                My Bookings
              </Button>
              <Button variant="primary" onClick={() => navigate("/my-hotels")}>
                My Hotels
              </Button>
              <Button variant="primary" onClick={() => {}}>
                Sign Out
              </Button>
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
