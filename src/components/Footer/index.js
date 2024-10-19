import './index.css'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsCCircle, BsThreadsFill } from "react-icons/bs";

const instagram=<FaInstagram />
const facebook=<FaFacebook />
const youtube=<FaYoutube />
const linkedin=<FaLinkedin />
const ccircle=<BsCCircle />
const threads=<BsThreadsFill />

const Footer =()=>(
    <div className="footer-container">
        <div className="footer-top-container">
            <div className="footer-top-con1">
                <h1 className="footer-top-h1">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p className="footer-top-p">Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necesbus Enim</p>
                <input type="text" className="footer-top-input" placeholder="Enter Your Email Address" />
                <button className="footer-top-button">SUBSCRIBE</button>
            </div>
            <div className="footer-top-con2">
                <h1 className="footer-top-h1">ABOUT US</h1>
                <p className="footer-top-p">Our Story</p>
                <p className="footer-top-p">Blogs</p>
                <p className="footer-top-p">Careers</p>
                <p className="footer-top-p">Contact Us</p>
                <p className="footer-top-p">Help & Support</p>
            </div>
            <div className="footer-top-con2">
                <h1 className="footer-top-h1">OUR SERVICES</h1>
                <p className="footer-top-p">Book Maali</p>
                <p className="footer-top-p">Rent Plants</p>
                <p className="footer-top-p">Plants & Pots</p>
                <p className="footer-top-p">Gardening Tools</p>
            </div>
            <div className="footer-top-con2">
                <h1 className="footer-top-h1">USEFUL LINKS</h1>
                <p className="footer-top-p">My Account</p>
                <p className="footer-top-p">Orders & Returns</p>
                <p className="footer-top-p">Track Order</p>
                <p className="footer-top-p">Terms & Conditions</p>
                <p className="footer-top-p">Privacy Policy</p>
                <p className="footer-top-p">Return, Refund and Replacement Policy</p>
            </div>
            <div className="footer-top-con2">
                <h1 className="footer-top-h1">GET IN TOUCH</h1>
                <p className="footer-top-p">Address: F-262,First Floor, Sushant Lok Phase-|||, Sector-57, Gurgaon, Haryana, India 122003</p>
                <p className="footer-top-p">Call: <br /> +919958287272</p>
                <p className="footer-top-p">Email <br /> care@chaperoneplants.com</p>
            </div>
        </div>
        <div className="footer-botton-container">
            <h1 className="footer-h1">CHAPERONE</h1>
            <p className="footer-p">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
            <h1 className="footer-h1">Follw us on</h1>
            <div className="footer-icons-container">
                <span className="footer-sp">{instagram}</span>
                <span className="footer-sp">{facebook}</span>
                <span className="footer-sp">{threads}</span>
                <span className="footer-sp">{youtube}</span>
                <span className="footer-sp">{linkedin}</span>
            </div>
            <hr />
            <p className="footer-p">{ccircle} 2023, chaperone.com All rights reserved.</p>
        </div>
    </div>
)

export default Footer