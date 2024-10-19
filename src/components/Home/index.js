import Header from '../Header';
import Products from '../Products';
import Footer from '../Footer';
import './index.css'
import { FaPlus, FaChevronDown } from "react-icons/fa";

const plus=<FaPlus />
const down=<FaChevronDown />

const Home=()=>{
    return (
        <div className="home-container">
            <Header />
            <div className="main-container">
                <div className="main-con-button">
                    <button className="main-con-btn1">Plants</button>
                    <button className="main-con-btn2">Pots</button>
                </div>
                <div className="main-con-summery">
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                </div>
                <div className="main-con-nursery">
                    <h1 className="main-con-nursery-h1">Nursery</h1>
                </div>
                <div className="main-con-content">
                    <div className="main-left-container">
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Filter</p>
                            <p className="main-left-con-inner-p">CLEAR ALL</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Types of Plants</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Price</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Nursery</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Ideal Plants Location</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Indoor/ Outdoor</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Maintenance</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Plant Size</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Water Scheadule</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Color</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Seasonal</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                        <hr className="main-left-container-hr" />
                        <div className="main-left-con-inner">
                            <p className="main-left-con-inner-p">Light Efficient</p>
                            <p className="main-left-con-inner-p">{plus}</p>
                        </div>
                    </div>
                    <div className="main-right-container">
                        <div className="main-right-con-top">
                            <p>300 Products</p>
                            <p className="main-right-con-top-p">
                                SORT BY 
                                <span className="main-right-con-top-sp">{down}</span>
                            </p>
                        </div>
                        <Products />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home