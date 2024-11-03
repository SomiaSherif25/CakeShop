import React, { Fragment, useState } from 'react'
import '../components/register/register.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });
  let { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/update/${id}`, product)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate('/admin');
    return "Product updated successfully";
  };
 
  return (
    <Fragment>
      <div className="register-container">
        <h1 style={{ color: "#b48804" }}>Update Product</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Product Category"
            name="category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />
          <input
            type="file"
            name="image"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
          <input type="submit" value="Update" />
        </form>
      </div>
    </Fragment>
  );
}

export default UpdateProduct
