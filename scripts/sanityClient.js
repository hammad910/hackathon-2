// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: '85p3cm1l', // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: 'skz2J0PrNV0rg6GVGGcPGO87sMfVicObKwNjckOFwUXWxuymjBrQHDByeOvTxCylVs5p0cwKbXkbKjZAneveGp6sywUKBXOGJ3pX6WtNxbrGvEomULY1ZfQTDaUfae8OtNPAUU5pI71YBSgczvJxuksLguLkYnTJAWdfYFWHFFkLRdPGkc7m',
}); 