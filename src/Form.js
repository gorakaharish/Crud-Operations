import { useState } from "react";

function Form(props) {
  const [product, setProduct] = useState(props.data);
  const [submitted, setSubmitted] = useState(false)

  const changeDataForm = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="form-overlay">
      <form>
        <div className="from-group">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="form-control mt-2"
            value={product.name}
            onChange={changeDataForm} />
          {
            submitted && product.name === "" && <span className="text-danger">Product Name Required</span>
          }
        </div>
        <div className="from-group">
          <label htmlFor="">Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            className="form-control mt-2"
            value={product.price}
            onChange={changeDataForm}
          />
          {
            submitted && product.price === "" && <span className="text-danger">Product Price Required</span>
          }
        </div>
        <div className="from-group">
          <label htmlFor="">Categorys:</label>
          <select
            name="category"
            className="form-control mt-2"
            value={product.category}
            onChange={changeDataForm}
          >
            <option value="-1"></option>
            <option value={"mobiles"}>Mobiles</option>
            <option value={"laptops"}>Laptops</option>
            <option value={"tabs"}>Tabs</option>
          </select>
          {
            submitted && product.category === "" && <span className="text-danger">Product Category Required</span>
          }
        </div>
        <button
          className="btn btn-primary float-end"
          onClick={(e) => {
            setSubmitted(true)
            e.preventDefault();
            if (!!product.name && !!product.price && !!product.category){
              props.add(product)
            }
          }}
        >
          Send
        </button>
        <button
          className="btn btn-danger float-end"
          onClick={(e) => {
            e.preventDefault();
            props.closeForm();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Form;

