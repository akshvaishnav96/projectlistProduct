// run api call to generate or get the cookie token

export async function getToken() {
  const data = await fetch("/api/token", {
    method: "POST",
  });
  const response = await data.json();
  return response
}