import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resource = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
      })}{
      _id,
      title,
      downloadLink,
      "image": poster.asset->url,
      views,
      slug,
      category
    }`
    );

    return resource;
  } catch (error: any) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
};
