import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import About from './About';
import { ProductType, CartType } from '../../Assets/Types/Product';
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import ProductCard from '../../Components/ProductCard';
import {
  getProductByCategory,
  getCategories,
} from '../../services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../state/action-creators/actionCreators';
import { styleHomeScreen } from '../../Assets/Style/styleHomeScreen';
import color from '../../Assets/colors';
import {ErrorBoundary} from 'react-error-boundary'
import FallBack from '../../Components/FallBack';

export interface StateType {
  product: ProductType[];
  cart: CartType[];
  order:CartType[];
}
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state: StateType) => state.product);
  const [loading, setLoading] = useState<Boolean>(false);
  const { width } = Dimensions.get('window');
  const [categories, setCategories] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState(0);
  const [finalData, setFinalData] = useState<ProductType[]>(state);
  const [error, setError] = useState();


  const numberofCategories = categories.length;
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then(response => setCategories(response.data)).catch(()=>setError(()=>{throw new Error('Error')}))
      // .then(response =>  setCategories(response.data)).catch(err=>console.log(err))
    if (categories.length>0){  
    getProductByCategory(categories[0])
      .then(response => {
        setFinalData(response.data);
        dispatch(getProducts(response.data));
      })
      .catch(err => console.log(err)).finally(() => setLoading(false));
      setPressed(true);
      setIndex(categories.indexOf(categories[0]));}
  }, [categories.length]);
  const getProductsCategory = item => {
    getProductByCategory(item)
      .then(response => {
        setFinalData(response.data);
        dispatch(getProducts(response.data));
      })
      .catch(err => console.log(err));
    setPressed(true);
    setIndex(categories.indexOf(item));
  };





  return (
    <>
      <TopBar setFinalData={setFinalData} navigation={navigation} />
      <About />
      
      <View style={[{ width: width }, styleHomeScreen.categoryContainer]}>
        <FlatList
          horizontal={true}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styleHomeScreen.categoryStyle,
                { width: width / numberofCategories },
              ]}
              onPress={() => getProductsCategory(item)}>
              <View>
                <Text
                  style={[
                    styleHomeScreen.categoryText,
                    pressed && categories.indexOf(item) == index
                      ? styleHomeScreen.categorySelected
                      : styleHomeScreen.categoryUnselected,
                  ]}>
                  {item.toUpperCase()}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    
      
      {loading ?
        (<ActivityIndicator size="large" color={color.green} />)
        : finalData && finalData.length > 0 ? (
          <FlatList
            numColumns={2}
            data={finalData}
            renderItem={({ item }: { item: ProductType }) => (
             
              <ProductCard item={item} navigation={navigation} />
            )}
          />
        ) : (
          <Text>No products found </Text>
        )}
   
    </>
  );
};

export default HomeScreen;