import { createClient } from "next-sanity";

const client = createClient({
    projectId: '85p3cm1l',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-04'
})

interface Params {
    [key: string]: string | number | boolean | undefined;
}

export async function sanityDataFetch({ query, params = {} }: { query: string, params?: Params }) {
    return await client.fetch(query, params);
}
