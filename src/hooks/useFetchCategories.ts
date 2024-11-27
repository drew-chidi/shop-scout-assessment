import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchCategories = async (): Promise<string[]> => {
  const response = await axios.get<string[]>(
    'https://fakestoreapi.com/products/categories',
  );
  return response.data;
};

const useFetchCategories = () => {
  return useQuery({queryKey: ['categories'], queryFn: fetchCategories});
};

export default useFetchCategories;
