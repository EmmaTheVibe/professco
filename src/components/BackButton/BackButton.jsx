import { useNavigate, useLocation } from "react-router-dom";
import { media } from "../../utils/data";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.state && location.state.from) {
      navigate(-1);
      // setTimeout(() => {
      //   window.scrollTo(0, 0);
      // }, 0);
    } else {
      navigate("/");
    }
    // navigate(-1);
  };

  return (
    <div
      onClick={handleBack}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
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
