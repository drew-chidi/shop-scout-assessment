import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    'https://fakestoreapi.com/products',
  );
  return response.data;
};

const useFetchProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export default useFetchProducts;
