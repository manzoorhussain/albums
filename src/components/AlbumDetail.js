/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';

const AlbumDetail = (props) => {
  return (
        <>
         <Card > 
               <CardSection album={props.data}/>
         </Card>
        <Card>
             <Image source={{uri:props.data.image}}  style={styles.imageStyle}/>

        </Card>
        <Card>
        <CustomButton onPress={()=>Linking.openURL(props.data.url)} text="Buy Now"/>
        </Card>
        </>
        
        
  )
};

const styles=StyleSheet.create({
  
    imageStyle:{
        width:400,
        height:300
    }

});

export default AlbumDetail;
