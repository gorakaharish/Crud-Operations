import axiso from "axios";

const URL = "http://localhost:26172/products";
export async function getData() {
  return await axiso.get(URL);
}

export async function deleteData(id) {
  return await axiso.delete(`${URL}/${id}`);
}

export async function postData(data) {
  return await axiso.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function putData(id, data) {
  return await axiso.put(URL + "/" + id, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

