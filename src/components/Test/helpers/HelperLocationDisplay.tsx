import { useLocation } from "react-router-dom";

const HelperLocationDisplay = () => {
    const location = useLocation();
    return <div data-testid="location-display">{location.pathname + location.search}</div>;
}

export default HelperLocationDisplay
