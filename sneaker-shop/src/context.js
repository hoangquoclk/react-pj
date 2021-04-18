import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

const AppContext = React.createContext();
const url = "https://605f2505e96e5c0017408466.mockapi.io/api/sneaker";
const url_search = "https://605f2505e96e5c0017408466.mockapi.io/api/sneaker?search=";
const url_apiServer = "http://localhost:3004/sneakers";


const AppProvider = ({children}) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [initialCart, setInitialCart] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const getProduct = async(url) => {
        setLoading(true);
        try {
            let data = await axios({
                method: "get",
                url: url
            }).then(({data}) => setList(data));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const addToCart = (product) => {
        const exist = initialCart.find((item) => item.id === product.id);
        if(exist) {
            setInitialCart(
                initialCart.map((x) => {
                    if(x.id === product.id) {
                        const data = list.find(item => item.id === product.id);
                        if(x.quantity >= data.quantity) {
                            swal({
                                title: "Nooooo!",
                                text: "The product is not enough!",
                                icon: "error",
                                button: "Aww yiss!",
                              });
                            return x;
                        }
                        swal({
                            title: "Good job!",
                            text: `${product.name} has been added to cart!`,
                            icon: "success",
                            button: "Aww yiss!",
                          });
                        return {...exist, quantity: exist.quantity + 1};
                    }
                    return x;
                })
            );
        }
        else {
            swal({
                title: "Good job!",
                text: `${product.name} has been added to cart!`,
                icon: "success",
                button: "Aww yiss!",
              });
            setInitialCart([...initialCart, {...product, quantity: 1}]);
        }
    }

    const changeNumberProduct = (id, change) => {
        setInitialCart(
            initialCart.map((item) => {
                if(item.id === id && change === "inc") {
                    const product = list.find(item => item.id === id);
                    if(item.quantity >= product.quantity) {
                        swal({
                            title: "Nooooo!",
                            text: "The product is not enough!",
                            icon: "error",
                            button: "Aww yiss!",
                          });
                        return item;
                    }
                    return {...item, quantity: item.quantity + 1}
                }
                else if(item.id === id && change === "dec") {
                    return {...item, quantity: item.quantity - 1}
                }
                return item; 
            }).filter((cartItem) => cartItem.quantity !== 0)
        );
    }

    const removeCartItem = (id) => {
        setInitialCart(initialCart.filter((item) => item.id !== id));
    }

    const clearCart = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this list cart!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your list cart has been deleted!", {
                icon: "success",
              });
              setInitialCart([]);
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        
    }

    useEffect(() => {
        if(search === '') {
            getProduct(url);
        }
        else {
            getProduct(url_search + search);
        }
    }, [search]);

    // set total
    useEffect(() => {
        let {totalPrice, totalQuantity} = initialCart.reduce((cartTotal, cartItem) => {
            const {quantity, price} = cartItem;
            cartTotal.totalPrice += price * quantity;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
        }, {totalQuantity: 0, totalPrice: 0});
        setTotalPrice(totalPrice);
        setTotalProduct(totalQuantity);
    }, [initialCart]);

    
    return <AppContext.Provider value={{
        list, 
        loading, 
        totalProduct, 
        totalPrice, 
        initialCart, 
        getProduct,
        setLoading, 
        setSearch, 
        addToCart,
        changeNumberProduct,
        removeCartItem,
        clearCart
        }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider} 