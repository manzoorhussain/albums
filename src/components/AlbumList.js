/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {StyleSheet, Text,View} from 'react-native';
import axios from 'axios';
import AlbumDetail from '../components/AlbumDetail';
class AlbumList extends Component{

    constructor(props) {
        super(props);
        
        this.state={albums:[]};
      }
    state={albums:[]};


    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>{
          
            this.setState({'albums':response.data})
        })

    }
    

    renderAlbums(){
         return this.state.albums.map(album=>
            {
                return <AlbumDetail data={album}/>
            })
    }

    render(){
        return(
            <View>
                {this.renderAlbums()}
            
             </View>

        )
        
    }

    
    
}

const styles=StyleSheet.create({
  

});

export default AlbumList;
