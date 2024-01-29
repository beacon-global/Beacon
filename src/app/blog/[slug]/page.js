// [slug]/page.js

import React from 'react';
import fetchDataAndExport from '../../../../test';

async function page() {
  return (
    <div>page</div>
  );
}

// export async function generateStaticParams() {
//   try {
//     // Fetch the blog data
//     const blogData = await fetchDataAndExport();

//     console.log("Fetched blog data:", blogData);

//     // Generate paths based on blog slugs
//     const paths = blogData.map((blog) => {
//       const param = {
//         params: {
//           slug: blog.currentSlug,
//         },
//       };

//       console.log("Generated path:", param);

//       return param;
//     });

//     console.log("Generated paths:", paths);

//     return paths;
//   } catch (error) {
//     console.error("Error fetching data for static paths:", error.message);
//     // Handle the error or return an empty array if needed
//     return [];
//   }
// }

export default page;
