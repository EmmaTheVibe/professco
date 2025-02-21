import { useNavigate, useLocation } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.state && location.state.from) {
      // Navigate back to the page that directed you here
      navigate(location.state.from);
    } else {
      // Fallback to browser history if state is not available
      navigate("/");
    }
  };

  return <div onClick={handleBack}>Back</div>;
}

export default BackButton;
