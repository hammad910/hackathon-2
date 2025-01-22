import { defineQuery } from "next-sanity";
import { sanityDataFetch } from "./fetchData";

export const Categories = defineQuery(`
    *[_type == "category"]{
        id,
        name,
        slug,
    }
`)
export const allProducts = defineQuery(`
    *[_type == "product"]{
        id,
        name,
        price,
        slug,
        description,
        quantity,
        "imageUrl": image.asset->url,
    }
`)

export const fourProducts = defineQuery(`
    *[_type == "product"][0..3]{
        id,
        name,
        price,
        slug,
        description,
        quantity,
        "imageUrl": image.asset->url,
    }
`)

export const getProductBySlug = async (slug: string) => {
    const query = `
      *[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        imageUrl,
        price,
        description,
        slug,
        "imageUrl": image.asset->url,
        dimensions {
          height,
          width,
          depth
        }
      }
    `;
    const product = await sanityDataFetch({ query, params: { slug } });
    return product;
};
