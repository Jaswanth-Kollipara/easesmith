import { Link } from "react-router-dom";
import './index.css'

const ThankYou=()=>(
    <div className="thank-you-container">
        <div className="thank-you-con-inner">
            <h1 className="thank-you-heading">Thank you for your interest in Monsterra</h1>
            <Link className="thank-you-button-link" to="/">
                <button className="thank-you-button">CONTINUE SHOPPING</button>
            </Link>
        </div>
    </div>
)

export default ThankYou