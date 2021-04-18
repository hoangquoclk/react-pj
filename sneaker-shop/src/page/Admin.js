import React, { createRef, useEffect, useState } from 'react'
import {useGlobalContext} from '../context'
import axios from 'axios'

const url = "https://605f2505e96e5c0017408466.mockapi.io/api/sneaker";

const Admin = () => {
    const {list, getProduct} = useGlobalContext();
    const addName = React.createRef();
    const addImage = React.createRef();
    const addPrice = React.createRef();
    const addQuantity = React.createRef();
    const [urlImage, setUrlImage] = useState(null);

    const addProduct = async(e) => {
        e.preventDefault();
        try {
            let data = await axios({
                method: "post",
                url: url,
                data: {
                    name: addName.current.value,
                    image: addImage.current.value,
                    price: addPrice.current.value,
                    quantity: addQuantity.current.value 
                }
            });
            console.log("thành công");
        } catch (error) {
            console.log(error);
        }
        getProduct();
    }

    // const addProduct = (e) => {
    //     e.preventDefault();
    //     console.log(addName.current.value);
    //     console.log(addImage.current.value);
    //     console.log(addPrice.current.value);
    //     console.log(addQuantity.current.value);
    // }

    const handleChangeImage = () => {
        setUrlImage(addImage.current.value);
    }

    return (
        <div className="manage">
            <div className="add">
                <h1>Thêm sản phẩm</h1>
                <form id="form-add" onSubmit={addProduct}>
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input type="text" name="name" id="name" placeholder="Adidas ..." autoComplete="off" ref={addName} />
                    <br/>
                    <label htmlFor="image">Link hình sản phẩm</label>
                    <input type="text" name="image" id="image" placeholder="https:// ..." 
                    autoComplete="off" 
                    ref={addImage} 
                    onChange={handleChangeImage}
                    />
                    <br/>
                    <img src={urlImage} alt=""/>
                    <br/>
                    <label htmlFor="price">Giá sản phẩm</label>
                    <input type="text" name="price" id="price" placeholder="100" autoComplete="off" ref={addPrice} />
                    <br/>
                    <label htmlFor="quantity">Số lượng sản phẩm</label>
                    <input type="text" name="quantity" id="quantity" placeholder="1" autoComplete="off" ref={addQuantity} />
                    <br/>
                    <button id="btn-add">Thêm</button>
                </form>
            </div>

            <div className="info">
                <h1>Danh sách sản phẩm</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá sản phẩm</th>
                            <th>Số sản phẩm</th>
                            <th>Điểu chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>        
                    {
                        list.map((item, index) => {
                            const {id, image, name, price, quantity} = item;
                            return (
                                <tr key={index}>
                                    <td>
                                        <form>
                                            <input type="text" name="name-info" id="name-info" defaultValue={name} />
                                        </form>
                                    </td>
                                    <td>
                                        <form>
                                            <input type="text" name="image-info" id="image-info" defaultValue={image} />
                                        </form>
                                    </td>
                                    <td>
                                        <form>
                                            <input type="text" name="price-info" id="price-info" defaultValue={price} />
                                        </form>
                                    </td>
                                    <td>
                                        <form>
                                            <input type="text" name="quantity-info" id="quantity-info" defaultValue={quantity} />
                                        </form>
                                    </td>
                                    <td>
                                        <form>
                                            <input type="submit" value="Sửa" id="btn-edit" />
                                            <input type="submit" value="Xóa" id="btn-delete" />
                                        </form>
                                    </td>
                                </tr>
                            );
                        })
                    }      
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;