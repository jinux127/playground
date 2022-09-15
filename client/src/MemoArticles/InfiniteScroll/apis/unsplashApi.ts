import { unsplash } from './instance';

export async function getPhotos(page: number, per_page: number, order_by = 'popular') {
  const response = await unsplash.get(``, { params: { page, per_page, order_by } });
  return response.data;
}
