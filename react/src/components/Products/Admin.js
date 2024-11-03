import React, { Fragment, useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const AllProducts = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getall`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

    let { id } = useParams();
     const deleteItem = (id) => {
       axios
         .delete(`http://127.0.0.1:8000/api/delete/${id}`)
         .then((response) => {
           console.log("Product deleted successfully", response.data.message);
           setProducts(product.filter((pro) => pro.id !== id));
         })
         .catch((err) => {
           console.error("Error deleting this product!", err);
         });
     };
  return (
    <Fragment>
      <div className="product-container">
        {product.map((el) => (
          <div className="product" key={el.id}>
            <img alt="" src={el.image} />
            <h4>{el.name}</h4>
            <p>{el.price}</p>
            <div className="buttons">
              <Link to={`/update/${el.id}`}>
              <button>Update</button>
              </Link>
              <Link>
                <button onClick={()=>deleteItem(el.id)}>Delete</button>
              </Link>
            </div>
            </div>
        ))}
      </div>
      <div className="center">
        <div className="link">
          <Link to="/addproduct">Add Product</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default AllProducts;
