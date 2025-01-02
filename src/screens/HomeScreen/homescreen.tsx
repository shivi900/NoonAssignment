import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import useHomeScreen from '../../hooks/useHomeScreen';
import styles from './styles'



const HomeScreen = ({ navigation }) => {
  const { filteredProducts, searchText, cart, handleSearch,banners } = useHomeScreen();
  

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.category} numberOfLines={1}>
          {item.category}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{item.price}</Text>
          <Text style={styles.discountPrice}>₹{item.price + 500}</Text>
          <Text style={styles.discount}>50% OFF</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search by category..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <View style={styles.iconContainer}>
            <Image source={require('../../../assets/images/shoppingCart.png')} style={{height:40,width:40}} color="#000" />
            {cart.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cart.length}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

    
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
     
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default HomeScreen;
