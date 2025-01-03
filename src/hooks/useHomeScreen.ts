import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

const useHomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [banners, setBanners] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const [refreshing, setRefreshing] = useState(false);

  
  const fetchProductsAndBanners = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);

     
      const categories = [...new Set(data.products.map((item) => item.category))]; 
      const bannersData = categories.map((category) => {
        const firstProduct = data.products.find((item) => item.category === category);
        return firstProduct; 
      });
      setBanners(bannersData);
    } catch (error) {
      console.error('Error fetching products and banners:', error);
    }
  };
  

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchProductsAndBanners(); 
    } catch (error) {
      console.error('Error refreshing products:', error);
    } finally {
      setRefreshing(false);
    }
  }, [fetchProductsAndBanners]);

 
  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = products.filter((item) =>
        item.category.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    fetchProductsAndBanners();
  }, []);

  return {
    products,
    filteredProducts,
    searchText,
    cart,
    banners, 
    handleSearch,
    onRefresh,
    refreshing
  };
};

export default useHomeScreen;
