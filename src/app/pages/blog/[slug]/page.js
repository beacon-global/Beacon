import React from "react";
import BlgComponent from "../BlgComponent";
import styles from "../blogs.module.css";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import sanityClient from "../../../../../sanity";
import PersonalBlog from "@/app/components/PersonalBlog";

export const generateStaticParams = async () => {
  const slugs = await sanityClient.fetch(
    `*[_type == "blog"]{ "slug": slug.current }`
  );

  // console.log(slugs, "Fetched slugs");

  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
};

const BlogPage = async ({ params }) => {
  const { slug } = params;

  const blog = await sanityClient.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      subtitle,
      location,
      publishedAt,
      slug,
      description,
      "imageUrl": image.asset->url,
      content[]{
        ...,
        "contentImageUrl": contentImage.asset->url 
      }
    }`,
    { slug }
  );

  return (
    <>
      <BlgComponent singleBlogData={blog} />
      <div className={styles.top110Margin}>
        <PersonalBlog />
      </div>
      <div className={styles.top110Margin}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
