import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';


const CardSection = ({album}) => {
console.log('album'+album)
    const {title,artist,thumbnail_image}=album;
    
  return (
   <View style={styles.containerStyle}>
    
    <View style={styles.thumbnailContainerStyle}>
        <Image source={{uri:thumbnail_image}}  style={styles.thumbnailStyle}/>
    </View>
   <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
</View>
   </View>
  )
};

const styles=StyleSheet.create({
  
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
     flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'

   },
    headerContainer:{
      flexDirection:'column',
      justifyContent:'space-around'

    },
    headerTextStyle:{
        fontSize:18,
        fontWeight:'bold'

    },
    thumbnailStyle:{
        width:100,
        height:60
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    }

});

export default CardSection;
