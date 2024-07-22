export async function getProductsData() {
  try {
    // get products data from local storage

    let productsData;
    // if local data not found hit the api from the products data response
    if (!productsData) {
      const data = await fetch("/api/products", {
        method: "POST",
      });

      const response = await data.json();

      // set items to localstore
      productsData = response.data;

      // return new response data
      return response.data;
    }

    // if localdata exist return localData
    return productsData;
  } catch (error) {
    return error;
  }
}
