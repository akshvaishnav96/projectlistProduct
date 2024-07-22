import { cookies } from "next/headers";

// Get token Generate Url from process.env
const { TOKEN_GENERATE_URL } = process.env;

// save token value and expire when token is generated
let tokenValid = {
  token: null,
  expire: null,
};

export async function POST(request) {
  const cookieStore = cookies();

  try {
    //check if token already exists
    const hasToken = cookieStore.get("user-token");

    //check token is not expired
    if (hasToken) {
      //check old saved token and cookie token is matcing token has valid expire time
      if (hasToken == tokenValid.token && tokenValid.expire > Date.now()) {
        // if token not expired return response as old token value
        return Response.json({ token: hasToken.value });
      }
    }

    // if token not already exists generate new token
    const tokenData = await fetch(TOKEN_GENERATE_URL, {
      method: "post",
      headers: {
        "Api-Key": process.env.API_KEY,
      },
    });

    let response = await tokenData.json();

    // destructure token and expire from responcse
    const { token, token_expire_time } = await response.data;

    // set token value in tokenValid object on page top
    tokenValid.token = token;
    tokenValid.expire = new Date(token_expire_time).getTime();

    // set token in cookie
    cookies().set({
      name: "user-token",
      value: response.data.token,
      // httpOnly: true,
      secure: true,
      sameSite: true,
      expires: Date.now() + 60 * 60 * 1000,
    });

    return Response.json({ response }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
