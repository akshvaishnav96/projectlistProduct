import { cookies } from "next/headers";



const { VISIT_ID, API_KEY, GET_PRODUCT_URL } = process.env


export async function POST(request) {

    const cookieStore = cookies();

    // get the token from the cookie 

    const userToken = cookieStore.get("user-token");

    try {
        const bodyData = {
            post_code: "2000,Barangaroo,NSW",
            visit_id: VISIT_ID,
            property_type: 1,
            life_support: 0,
            movin_type: 0,
            life_support_value: "",
            solar_panel: 1,
            energy_type: 3,
            electricity_bill: 0,
            gas_bill: 0,
        };

        // get the products data from the api
        const getProductdata = await fetch(
            GET_PRODUCT_URL,
            {
                method: "POST",
                headers: {
                    "API-Key": API_KEY,
                    "Auth-Token": userToken.value,
                    CountryId: 1,
                    ServiceId: 1,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData),
            }
        );

        let response = await getProductdata.json();



        return Response.json({ data: response });

    } catch (error) {

        return Response.json({ error: error });
    }
}








