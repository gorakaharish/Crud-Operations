import Form from "./Form";
import Table from "./Table";
import { getData, deleteData, postData, putData } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [opeForm, setOpenForm] = useState(false)
  const [edit, setEdit] = useState(false)
  const [initialForm, setForm] = useState({
    name: '', price: '', category: ''
  })

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await getData();
    setProducts(response.data);
  };
  const deleteProduct = async (id) => {
    await deleteData(id);
    getProduct();
  };

  const addProduct = async (product) => {
  
   const data = {
    name: product.name,
    price: product.price,
    category: product.category
   }

   if (edit) 
    await putData(product.id, data);
   else
    await postData(data)
    getProduct();
    setOpenForm(false)
   

    
  };

  const editProduct = async (data) => {
    setForm(data);
    setOpenForm(true)
    setEdit(true)
  };

  const showForm = () => {
    setOpenForm(true)
    setForm({
      name: '', price: '', category: ''
    })
  }
  const closeForm = () => {
    setOpenForm(false)
  }

  return (
    <div className="wrapppr m-5 w-50">
      <h2 className="text-primary">CURD Operations</h2>
      <button className="btn btn-primary" onClick={() => {
        showForm()
      }}>Add Product</button>
      <Table products={products} delete={deleteProduct} edit={editProduct} />
      {
        opeForm && <Form closeForm={closeForm} data={initialForm} add={addProduct} />
      }
    </div>
  );
}

export default App;

