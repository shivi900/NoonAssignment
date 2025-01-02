import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  iconContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 10,
  },
  cartText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  carouselContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  carouselImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productCard: {
    width: width / 2 - 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    marginHorizontal: 5,
  },
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  category: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  discountPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: 6,
  },
  discount: {
    fontSize: 12,
    color: 'red',
    marginLeft: 6,
  },
  listContent: { paddingBottom: 20, paddingHorizontal: 10 },
});

export default styles;
