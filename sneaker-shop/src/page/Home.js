import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Loading from '../component/Loading'

const Home = () => {
    const { list, loading, addToCart } = useGlobalContext();

    if(loading) {
        return <Loading />
    }

    return (     
        <main>
            {list.map((item) => {
                const {id, image, name, price} = item;
                return (
                    <div className="sneaker" key={id}>
                        <Link to={`/detail/${id}`}>
                        <img src={image} alt={name}/>
                        </Link>
                        <p className="name">{name}</p>
                        <p className="price">${price}</p>
                        <button onClick={() => {addToCart(item)}}>Add to cart</button>
                        <Link to={`/detail/${id}`}>
                        <button>                 
                            View Detail
                        </button>
                        </Link>
                    </div>
                );
            })}
        </main>
    );
}

export default Home;