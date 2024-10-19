import './index.css'
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const search=<FaSearch />
const cart=<BsCart2 />
const profile=<CgProfile />
const down=<FaChevronDown />

const Header = () =>{
    return(
        <div>
            <div className="top-container">
                <p></p>
                <p className="top-con-p1">Free Shipping on oders above 999/-</p>
                <p className="top-con-p2">Call us on: +91 98768 05120</p>
            </div>
            <div className="headder-container">
                <nav className="headder-nav-container">
                    <div className="nav-container1">
                        <img className="nav-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_KNvj7j49HtLyhe4gx8W2OhfHkAQI_04jBus3lbbeswpAb3XAnh2xPrUW__HPmhOkA4&usqp=CAU" alt="Chaperone" />
                        <h1 className="nav-con1-h1">Chaperone</h1>
                    </div>
                    <div className="nav-container2">
                        <p>Home</p>
                        <p className="nav-con2-p1">Plants & Plots</p>
                        <p className="nav-con2-p2">Tools {down}</p>
                        <p className="nav-con2-p2">Our Services {down}</p>
                        <p>Blog</p>
                        <p>Our Story</p>
                        <p>FAQs</p>
                    </div>
                    <div className="nav-container3">
                        <div className="nav-con3-inner">
                            <p className="nav-con3-in-p1">{profile}</p>
                            <p className="nav-con3-in-p2">My profile</p>
                        </div>
                        <div className="nav-con3-inner">
                            <p className="nav-con3-in-p1">
                                <span>{cart}</span>
                                <span className="nav-con3-sp">3</span>
                            </p>
                            <p className="nav-con3-in-p2">Cart</p>
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-lg navbar-light nav-container-mini">
                    <div class="navbar-brand nav-con-left">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_KNvj7j49HtLyhe4gx8W2OhfHkAQI_04jBus3lbbeswpAb3XAnh2xPrUW__HPmhOkA4&usqp=CAU" alt="img1" className="nav-img-mini" />
                        <h1 className="nav-con1-h1-mini">Chaperone</h1>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul class="navbar-nav nav-container-mini-ul">
                            <li class="nav-link">Home</li>
                            <li class="nav-link nav-con2-p1" href="#">Plants & Plots</li>
                            <li class="nav-link nav-con2-p2" href="#">Tools {down}</li>
                            <li class="nav-link nav-con2-p2" href="#">Our Services {down}</li>
                            <li class="nav-link" href="#">Blog</li>
                            <li class="nav-link" href="#">Our Story</li>
                            <li class="nav-link" href="#">FAQs</li>
                            <li class="nav-link nav-con2-p2" href="#">{profile} My profile</li>
                            <li class="nav-link nav-con2-p2" href="#">{cart} <span className="nav-con3-sp">3</span> Cart</li>
                            <li class="nav-link nav-con2-p2" href="#">Blog</li>
                        </ul>
                    </div>
                </nav>
                <div className="header-con-search">
                    {search}
                    <input className="header-con-input" type="text" placeholder="Search Plant" />
                </div>
            </div>
        </div>
    )
}

export default Header