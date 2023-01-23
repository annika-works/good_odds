import { createClient } from "contentful";
import { access } from "fs";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space!,
  accessToken: accessToken!,
});

// Retrieve the footer Data from Contentful
const getFooterData = async () => {
  const response = await client.getEntries({
    content_type: "footer",
  });
  if (response) JSON.parse(response.stringifySafe());
  return response.items[0].fields;
}

export default getFooterData;
