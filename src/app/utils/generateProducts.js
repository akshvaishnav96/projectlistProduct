export async function getProductsData() {
    try {


        // get products data from local storage 
        let productsData = localStorage.getItem('products')



        // if local data not found hit the api from the products data response
        if (!productsData) {

            const data = await fetch("/api/products", {
                method: "POST",
            });

            const response = await data.json();


            // set items to localstore 
            localStorage.setItem("products", JSON.stringify(response.data));

            // return new response data
            return response.data;
        }

        // if localdata exist return localData
        return JSON.parse(productsData)


    } catch (error) {
        return error
    }


}