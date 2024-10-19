import PopUp from '../PopUp'
import { Link } from "react-router-dom";
import './index.css'
import { FaRegHeart, FaStar } from "react-icons/fa";

const heart=<FaRegHeart />
const star=<FaStar className="yellow" />

const ProductCard=props=>{
    const {productData}=props
    const {img}=productData

    return(
        <li className="product-card-container">
            <div className="product-card-top-container">
                <p className="product-card-top-p">{heart}</p>
                <img className="product-card-image" src={img} alt="product-image"/>
                <Link className="product-card-top-con-button-link" to="/thankyou">
                    <button className="product-card-top-con-button">View Product</button>
                </Link>
            </div>
            <h1 className="product-card-con-h1">Monsterra</h1>
            <p className="product-card-con-p1">Indoor Plant, Low maintenance</p>
            <p className="product-card-con-p2">{star}{star}{star}{star}{star} 4.9</p>
            <div className="product-card-middle-container">
                <p className="product-card-middle-con-p">$ 359</p>
                <p>$ 299</p>
            </div>
            <div className="product-card-bottom-container">
                <PopUp />
                <button className="product-card-bottom-con-button2">Buy on Rent</button>
            </div>
        </li>
    )
}

export default ProductCard