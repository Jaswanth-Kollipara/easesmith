import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"

const closeIcon=<IoMdClose />
const plus=<FaPlus />
const minus=<FaMinus />

const PopUp=()=>(
    <Popup
        modal
            trigger={
            <button type="button" className="trigger-button product-card-bottom-con-button1">
                {minus}
                <span className="product-card-bottom-con-button1-sp">Add to cart</span>
                {plus}
            </button>
            }
    >
        {close => (
            <div className="popup-container">
                <p className="popup-p1" onClick={() => close()}>{closeIcon}</p>
                <p className="popup-p2">Your Cart</p>
                <hr className="popup-hr" />
                <h1 className="popup-h1">Congractulations</h1>
                <h1 className="popup-h2">Order Placed!</h1>
                <img className="popup-image" src="https://cdn-icons-png.flaticon.com/512/1660/1660449.png" alt="popup-image" />
                <p className="popup-p2">Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
                <button type="button" className="trigger-button popup-button1" onClick={() => close()} >
                    CONTINUE SHOPPING
                </button>
            </div>
        )}
   </Popup>
)

export default PopUp