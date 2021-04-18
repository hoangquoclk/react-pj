import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import {useGlobalContext} from '../context'
import Loading from '../component/Loading'

// const url_apiServer = "http://localhost:3004/sneakers";
const url = "https://605f2505e96e5c0017408466.mockapi.io/api/sneaker";

const Detail = () => {
    const {id} = useParams();
    const [sneaker, setSneaker] = useState({});
    const {loading, setLoading, addToCart} = useGlobalContext();

    const getSneaker = async() => {
        setLoading(true);
        try {
            let data = await axios({
                method: "get",
                url: `${url}/${id}`
            }).then(({data}) => setSneaker(data));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    
    useEffect(() => {
        getSneaker();
    }, [id]);

    if(loading) {
        return <Loading />
    }
    
    return (
        <div className="sneaker-detail">
            <img src={sneaker.image}
            alt="image"/>
            <p className="name">{sneaker.name}</p>
            <p className="price"><i className="fas fa-tags"></i> <span><i className="fas fa-dollar-sign"></i> {sneaker.price}</span></p>
            <p className="quantity"><i className="fas fa-truck-moving"></i> <span>{sneaker.quantity}</span></p>
            <button onClick={() => {addToCart(sneaker)}}>Add to cart</button>
            <Link to="/">
                <button>Back To Home</button>
            </Link>
        </div>
    );
}

export default Detail;