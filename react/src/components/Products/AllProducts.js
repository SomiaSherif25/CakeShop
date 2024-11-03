// import React, { Fragment, useEffect, useState } from "react";
// import "./products.css";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// const AllProducts = () => {
//   const [product, setProducts] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // useEffect(() => {
//   //   axios
//   //     .delete("http://127.0.0.1:8000/delete/{id}")
//   //     .then((res) => console.log(res))
//   //     .catch((err) => console.log(err));
//   // });
//   // let { id } = useParams();
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   axios.delete(`http://127.0.0.1:8000/api/delete/${id}`, product).then((res) => console.log(res)).catch((err) => console.log(err));
//   //   return "Product deleted successfully";
//   // }

//   return (
//     <Fragment>
//       <div className="product-container">
//         {product.map((el) => (
//           <div className="product" key={el.id}>
//             {/* {console.log(el.image)} */}
//             <img alt="" src={el.thumbnail} />
//             <h4>{el.title}</h4>
//             <p>{el.price}</p>
//             <div className="buttons">
//               {/* <Link to={`/update/${el.id}`}> */}
//               <button>Update</button>
//               {/* </Link> */}
//               <Link>
//                 <button>Delete</button>
//               </Link>
//             </div>

//             <button>Read More</button>
//           </div>
//         ))}
//       </div>
//       <div className="center">
//         <div className="link">
//           <Link to="/addproduct">Add Product</Link>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default AllProducts;

import React, { Fragment, useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import { Link } from "react-router-dom";
const AllProducts = () => {
  const [product, setProducts] = useState([]);

  async function handleProducts() { 
   await  axios
     .get(`http://127.0.0.1:8000/api/getall`)
     .then((res) => {
  
       setProducts(res.data.data);
     })
     .catch((err) => console.log(err));
  }
  useEffect(() => {
 handleProducts()
  }, []);

  return (
    <Fragment>
      <div className="product-container">
        {product? product.map((el) => 
          <div className="product" key={el.id}>
            <img src={el.image} alt={'Not Found'} />
            <h4>{el.name}</h4>
            <p>{el.price}</p>
            <button>Read More</button>
          </div>
        ):<h1>Loading....</h1>}
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

