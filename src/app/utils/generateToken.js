// run api call to generate or get the cookie token

export async function getToken() {
try {
    const data = await fetch("/api/token", {
      method: "POST",
    });
    const response = await data.json();
    return response
} catch (error) {
  console.log(error);
}
}