import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: `https://605f2505e96e5c0017408466.mockapi.io/api/products`
});

function App() {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tên điện thoại</th>
            <th>Giá tiền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iphone</td>
            <td>10000</td>
            <td>true</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button>Thêm sản phẩm</button>
    </div>
  );
}

export default App;
