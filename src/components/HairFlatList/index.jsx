import React, { useState } from 'react';
import { View, FlatList, Image } from 'react-native';

import { styles } from './styles';

const HairFlatList = () => {
  const [images, setImages] = useState([
    require('../../assets/Cabelos/cabelo1.png'),
    require('../../assets/Cabelos/cabelo2.png'),
    require('../../assets/Cabelos/cabelo3.png'),
    require('../../assets/Cabelos/cabelo5.png'),
    require('../../assets/Cabelos/cabelo6.png'),
    require('../../assets/Cabelos/cabelo7.png'),
    require('../../assets/Cabelos/cabelo8.png'),
    require('../../assets/Cabelos/cabelo10.png'),
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.imageList} source={item} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
};

export { HairFlatList };
