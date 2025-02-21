import { useNavigate, useLocation } from "react-router-dom";
import { media } from "../../utils/data";

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

  return (
    <div onClick={handleBack} style={{ display: "flex", alignItems: "center" }}>
      <img src={media.backArrow} alt="arrow" />
      <p
        className="semiboldFont"
        style={{ color: "#9CA3AF", marginLeft: "12px" }}
      >
        Close
      </p>
    </div>
  );
}

export default BackButton;
