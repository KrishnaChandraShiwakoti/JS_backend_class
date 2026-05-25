let products = [
  { id: 101, name: "Laptop", price: 50000 },
  { id: 102, name: "Mobile", price: 20000 },
  { id: 103, name: "Tablet", price: 30000 },
  { id: 104, name: "Monitor", price: 15000 },
];
// your application should be 6 functions to perform CRUD operations using Promise
// 1. createProduct
// -- takes product object as argument and add to products array
// -- check if id is present, if yes, reject with error
// -- if name is missing, replace with "Unknown Product"
// -- if price is missing, replace with 0
// 2. getProducts,
// -- returns all products after 2 seconds delay using Promise
// 3. getProductById,
// -- takes id as argument and returns product with that id after 1 second delay
// using Promise, if not found, reject with error
// 4. searchProduct,
// -- takes name as argument and returns all products that match the name
// 5. updateProduct,
// -- takes id and update object as arguments,
// finds product by id and updates it with the update object,
// if not found, reject with error
// 6. deleteProduct
// -- takes id as argument and deletes product with that id,
// if not found, reject with error, if deleted, resolve with success message

// Example:

const addProduct = (product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { id, name, price } = product;
      const CheckID = products.find((p) => p.id === id);

      if (CheckID) reject(new Error("Product with the same id already exists"));
      else {
        if (name == null || name == undefined) name = "unknown";
        if (price == null || price == undefined) price = 0;
        console.log(product);

        products.push(product);
        resolve(products);
      }
    }, 1000);
  });
};

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

const getProductById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });

const getProductByName = (name) => {
  return new Promise((resolve, reject) => {
    const foundProducts = products.find((p) => (p.name = name));
    if (foundProducts) resolve(foundProducts);
    reject(new Error("No product with that name found"));
  });
};

const updateProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    let foundProduct = products.find((p) => p.id == id);
    if (foundProduct) {
      foundProduct = product;
      resolve(product);
    } else {
      reject(new Error("Product with id not found"));
    }
  });
};

const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    const foundProduct = products.findIndex((p) => p.id === id);
    if (foundProduct != null || foundProduct != undefined) {
      products.splice(foundProduct, 1);
      resolve("Product deleted");
    } else {
      reject(new Error("Product with id not found"));
    }
  });
};

const main = async () => {
  let product = { id: 105, name: "ko", price: 0 };

  let result = await getProductById(101);
  console.log("getProductById", result);
  result = await addProduct(product);
  console.log("Add products", result);
  result = await getAllProducts();
  console.log("getAllProducts", result);
  result = await getProductByName("laptop");
  console.log("getProductByName", result);
  result = await updateProduct(101, { name: "laptops" });
  console.log("updateProduct", result);
  result = await deleteProduct(101);
  console.log("deleteProduct", result);
};

main();
