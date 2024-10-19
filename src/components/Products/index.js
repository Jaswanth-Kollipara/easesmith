import ProductCard from '../ProductCard'
import {useState} from 'react'
import './index.css'

const data=[
    {
        id: 0,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 1,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 2,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 3,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 4,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 5,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 6,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 7,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 8,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 9,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 10,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 11,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 12,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 13,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 14,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 15,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 16,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 17,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 18,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 19,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 20,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 21,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 22,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 23,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 24,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 25,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 26,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 27,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 28,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 29,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 30,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 31,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 32,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 33,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 34,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 35,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 36,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 37,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 38,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 39,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 40,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 41,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 42,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 43,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 44,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 45,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 46,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 47,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
    {
        id: 48,
        img: "https://i.pinimg.com/474x/67/99/dd/6799ddcc1e64b2f6301e0d503b5e273e.jpg",
    },
    {
        id: 49,
        img: "https://kitandkaboodle.ae/cdn/shop/files/342000005.png?v=1726058647&width=1946",
    },
    {
        id: 50,
        img: "https://i.pinimg.com/474x/f1/92/16/f19216558d13ca8d2907c21f94c1f794.jpg",
    },
]

const Products = () =>{
    const [count,setCount]=useState(9)
    const updatedData=data.filter(item=>item.id<count)
    const onClickViewMore=()=>{
        if(count<50){
            setCount((prevCount)=>{
                    return prevCount + 3
                }
            )
        }
    }

    return(
        <div className="product-container">
            <ul className="product-list">
                {updatedData.map(product => (
                    <ProductCard productData={product} key={product.id} />
                ))}
            </ul>
            <div className="product-con-bottom">
                <button className="product-con-button" onClick={onClickViewMore}>View More</button>
            </div>
        </div>
    )

}

export default Products