import api from '../api'

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  rating: number;
  reviews: Array<{
    user: string;
    rating: number;
    comment: string;
  }>;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  owner: string;
  availability: boolean;
  condition: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

export const getProducts = async (page = 1, limit = 12): Promise<ProductsResponse> => {
  try {
    const response = await api.get('/products', {
      params: { page, limit }
    });
    
    // Handle the backend's response format
    if (response.data?.data?.products) {
      return {
        products: response.data.data.products,
        total: response.data.pagination.total,
        page: response.data.pagination.page,
        limit: response.data.pagination.limit
      };
    }
    
    throw new Error('Unexpected API response format');
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data.data.product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}; 