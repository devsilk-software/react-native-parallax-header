import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import CollapsibleHeaderScrollView from './CollapsibleHeaderScrollView';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CollapsibleHeaderScrollView
        title="React Native Simple Parallax"
        image={require('./images/header-image.jpg')}
      >
        <Text style={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas
          blanditiis. Eos veniam aperiam accusamus reiciendis sunt ut,
          temporibus voluptas. Blanditiis voluptatum, eligendi libero
          repudiandae ullam molestias iste laborum nesciunt doloremque officiis
          quod culpa natus voluptate quia? Accusantium recusandae cumque
          voluptatem sunt alias dicta inventore ab ullam, fugiat voluptates
          deserunt atque. Eius amet sapiente dolor expedita dolores ratione
          velit maiores doloribus eum corporis sit quos maxime, delectus cumque
          esse aperiam id ipsum. Optio sit rerum tempore odio dolorum minus
          fugit labore, amet recusandae? Delectus optio saepe ad accusantium sed
          ullam dignissimos cum excepturi dolores quo. A dicta repellendus
          consequatur distinctio porro, cupiditate sit consequuntur repellat
          facilis possimus aspernatur? Qui non eaque ex nobis, itaque autem
          totam ratione veniam! Porro vero quod ipsam reiciendis fuga vel minus
          ducimus iste voluptatum, molestiae odio. Sunt delectus fugit est ut
          eos consequatur alias ullam, commodi velit iure natus inventore
          maxime! Amet fugit odit aliquid iusto distinctio eos corrupti, nemo
          fugiat repellat porro quibusdam hic vero minima error ullam, tempore
          laboriosam ad ea atque dolorum labore quam. Unde laudantium nulla,
          hic, sed, necessitatibus magnam illo eligendi impedit cumque
          doloremque tempore eos culpa! Rerum ratione illum, accusamus alias
          voluptates obcaecati sed. Consequatur dolore voluptate minus odit!
        </Text>
      </CollapsibleHeaderScrollView>
    </SafeAreaView>
  );
};

interface IStyles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
  },
  text: {
    padding: 20,
    fontSize: 15,
    lineHeight: 25,
  },
});

export default App;
