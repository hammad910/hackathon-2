import axios from "axios";
import { client } from "./sanityClient.js";
import slugify from "slugify";

async function uploadImageToSanity(imageUrl) {
    try {
        // Fetch the image from the URL and convert it to a buffer
        const response = await axios.get(imageUrl, { responseType: "arraybuffer", timeout: 10000 });
        const buffer = Buffer.from(response.data);
        // Upload the image to Sanity
        const asset = await client.assets.upload("image", buffer, {
            filename: imageUrl.split("/").pop(), // Extract the filename from URL
        });
        console.log("Image uploaded successfully:", asset);
        return asset._id; // Return the uploaded image asset reference ID
    } catch (error) {
        console.error("❌ Failed to upload image:", imageUrl, error);
        return null;
    }
}

async function createCategory(category, counter) {
    try {
        const categoryExist = await client.fetch(`*[_type=="category" && slug==$slug][0]`, { slug: category.slug });
        if (categoryExist) {
            return categoryExist._id;
        }
        const catObj = {
            _type: "category",
            _id: `${category.slug}-${counter}`,
            name: category.name,
            slug: category.slug,
        };
        const response = await client.createOrReplace(catObj);
        console.log("Category created successfully", response);
        return response._id; // Return the uploaded image asset reference ID
    } catch (error) {
        console.error("❌ Failed to create category:", category.name, error);
    }
}

async function importData() {
    try {
        const response = await axios.get("https://hackathon-apis.vercel.app/api/products");
        const products = response.data;
        let counter = 1;

        for (const product of products) {
            let imageRef = null;
            let catRef = null;

            if (product.image) {
                imageRef = await uploadImageToSanity(product.image);
            }
            if (product.category?.name) {
                catRef = await createCategory(product.category, counter);
            }

            const sanityProduct = {
                _id: `product-${counter}`,
                _type: "product",
                name: product.name,
                slug: {
                    _type: "slug",
                    current: slugify(product.name || "default-product", {
                        lower: true,
                        strict: true,
                    }),
                },
                price: product.price,
                category: {
                    _type: "reference",
                    _ref: catRef || undefined,
                },
                tags: product.tags || [],
                quantity: 50,
                image: imageRef
                    ? {
                          _type: "image",
                          asset: {
                              _type: "reference",
                              _ref: imageRef,
                          },
                      }
                    : undefined,
                description: product.description || "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
                features: product.features || [
                    "Premium material",
                    "Handmade upholstery",
                    "Quality timeless classic",
                ],
                dimensions: product.dimensions || {
                    _type: "dimensions",
                    height: "110cm",
                    width: "75cm",
                    depth: "50cm",
                },
            };
            counter++;

            console.log("Uploading product:", sanityProduct);
            await client.createOrReplace(sanityProduct);
            console.log(`✅ Imported product: ${sanityProduct.name}`);
        }

        console.log("✅ Data import completed!");
    } catch (error) {
        console.error("❌ Error importing data:", error);
    }
}

importData();
