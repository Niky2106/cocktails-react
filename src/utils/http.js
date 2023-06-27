const BASE_URL = "https://www.thecocktaildb.com/api.php";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = res.json();

  return data;
};