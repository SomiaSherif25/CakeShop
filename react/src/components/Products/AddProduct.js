import React, { Fragment , useState} from 'react'
import axios from 'axios'
import '../register/register.css'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
      name: "",
      price: "",
      category: "",
      image: "",
    });
    function handleInputs(e) {
        e.preventDefault();
        axios
          .post("http://127.0.0.1:8000/api/added", product)
          .then((res) => navigate("/products"))
          .catch((err) => console.log(err));
  }
  

  return (
    <Fragment>
      <div className="register-container">
        <form
          onSubmit={(e) => handleInputs(e)}
        >
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
            // onChange={handleFileChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </Fragment>
  );
}

export default AddProduct

