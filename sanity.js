import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  projectId: "l1v9kmrc",
  apiVersion: "2023-05-03",
  dataset: "production",
  useCdn: true,
});

export default sanityClient;
