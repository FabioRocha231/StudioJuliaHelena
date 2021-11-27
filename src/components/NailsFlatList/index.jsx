import React, { useState } from 'react';
import { View, FlatList, Image } from 'react-native';

import { styles } from './styles';

const NailsFlatList = () => {
  const [images, setImages] = useState([
    require('../../assets/unhas/unhas1.png'),
    require('../../assets/unhas/unhas2.png'),
    require('../../assets/unhas/unhas3.png'),
    require('../../assets/unhas/unhas5.png'),
    require('../../assets/unhas/unhas6.png'),
    require('../../assets/unhas/unhas7.png'),
    require('../../assets/unhas/unhas8.png'),
    require('../../assets/unhas/unhas9.png'),
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

export { NailsFlatList };
