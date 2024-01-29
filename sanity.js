import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


// localhost:3001
// export const client = createClient({
//   projectId: "l1v9kmrc",
//   apiVersion: "2023-05-03",
//   dataset: "production",
//   token:
//     "skD5LHGHF79IfLsvQOPYQcuMG2bwp0EydZpJ0cqAROYdXzOmSvOOVfq1piS1nqcz01WnHtMDU3XdmCdcuy4OMwqyYTfBvUJt1RgLbjF4nIY23UVPhbhCYptz8Rvg5xaxLpgofyl0D0tat4UOYJqzPKjHG1u2tj3CIujh82obbsZ30y1FZ7u7",
//   useCdn: false,
// });

// localhost3000
export const client = createClient({
  projectId: "l1v9kmrc",
  apiVersion: "2023-05-03",
  dataset: "production",
  token:
    "skD5LHGHF79IfLsvQOPYQcuMG2bwp0EydZpJ0cqAROYdXzOmSvOOVfq1piS1nqcz01WnHtMDU3XdmCdcuy4OMwqyYTfBvUJt1RgLbjF4nIY23UVPhbhCYptz8Rvg5xaxLpgofyl0D0tat4UOYJqzPKjHG1u2tj3CIujh82obbsZ30y1FZ7u7",
  useCdn: false,
});

// const builder = imageUrlBuilder(client);

// export function urlFor(source: any) {
//   return builder.image(source);
// }
