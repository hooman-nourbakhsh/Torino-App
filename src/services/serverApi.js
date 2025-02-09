import QueryString from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const serverFetch = async (endpoint, query, options = { cache: "force-cache" }) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${QueryString.stringify(query)}`;

  try {
    const res = await fetch(`${url}`, options);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
};
