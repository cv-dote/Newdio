import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Ben_Reel_Thum from '../compornents/Ben_Reel_Thum';

export default function ArtistPage() {
  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <Text style={styles.backStyle}> ＜ Back </Text>
        <Text style={styles.tytleStyle}>Newdio </Text>
        <StatusBar style="auto" />
      </View>

      {/* Body container */}
      <View>
        <View style={styles.artistProfile}>
          {/* <Text>アイみょんの写真</Text> */}
          <Image
            style={styles.artistImage}
            source={{
              uri: `https://cdfront.tower.jp/~/media/Images/Tol/pc/article/feature_item/J-Pop/2020/07/23/0701.jpg?h=400&w=600&la=ja-JP`,
            }}
          />
          <View style={styles.artistDetails}>
            <Text style={styles.artistName}>アイみょん</Text>
            <View style={styles.followButton}>
              <Text style={styles.followButtonText}>フォロー済み</Text>
            </View>
            <MaterialIcons style={styles.placeIcon} name="place" size={24} color="white" />
            <Text style={styles.placeInfo}>仙台市  </Text>
            <Text style={styles.followerNum}>126人がフォロー中</Text>
            <Text style={styles.bio}>
              私はアイみょんです。君はロックなんて聞かないと思うけれど、私はメタリカのかっこよさもわからずにただただJ-POPやアイドル音楽を効いてるだけのそこの君みたいな腐りリスナーは絶対に殺すと思いな..続きを表示
            </Text>
          </View>
          {/* <Ben_Reel_Thum style={styles.thumListContainer}/> */}
        </View>


      </View>

      {/* Footer container */}
      <View style={styles.footerContainer}>
        <View style={styles.homeButtonContainer}>
          <AntDesign name="home" size={24} color='#FC9D0F' />
          <Text style={styles.footerText} >Home</Text>
        </View>

        <View style={styles.libraryButtonContainer}>
          <MaterialIcons name="library-music" size={24} color="#FFFFFF" />
          <Text style={styles.footerText}>My Library</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2D2D',
    color: '#FFFFFF',
  },
  headerContainer:{
    width: '100%',
    height: 96,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems:'center',
    backgroundColor: '#000000',
  },
  backStyle:{
    position: 'absolute',
    width: 80,
    height: 40,
    left: 0,
    bottom: 4,
    color: '#FFFFFF',
    // backgroundColor: 'blue',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    // fontWeight: 500,
    lineHeight: 40,
  },
  tytleStyle:{
    color: '#FFFFFF',
    // backgroundColor:'green',
    textAlign: 'center',
    width: 108,
    height: 48,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle:'normal',
    fontWeight:'normal',
    lineHeight: 48,
    fontSize: 32,
  },
  bodyConteiner:{
    backgroundColor: '#2E2D2D',
  },
  artistProfile:{
    borderBottomWidth:1,
    borderColor:'rgba(256,256,256,0.1)',
    width: '100%',
    height:436,
  },
  artistImage:{
    width:414,
    height:243,
  },
  artistDetails:{
    // backgroundColor:'pink',
    position:'absolute',
    width:376,
    height:192,
    left:19,
    top:248,
  },
  artistName:{
    position:'absolute',
    width: 120,
    height: 32,
    fontFamily:'roboto',
    fontStyle:'normal',
    fontWeight: 'bold',
    fontSize:24,
    lineHeight: 40,
    color: '#FFFFFF',
  },
  followButton:{
    position:'absolute',
    width: 96,
    height: 32,
    right: 0,
    top:4,
    backgroundColor: '#FC9D0F',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  followButtonText:{
    textAlign:'center',
    lineHeight:32,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
  },
  placeInfo:{
    position:'absolute',
    width: 48,
    height: 24,
    left: 16,
    top: 40,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
  placeIcon:{
    position:'absolute',
    width: 48,
    height: 24,
    left: 0,
    top: 40,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
  followerNum:{
    position:'absolute',
    width: 139,
    height: 24,
    left: 80,
    top: 40,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
  bio:{
    position:'absolute',
    width: '100%',
    height: 112,
    left: 0,
    top: 80,
    color:'#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
  },
  thumListContainer:{
    flex: 1,
  },
  reelListContainer:{
  },
  reelItem:{
    borderBottomWidth:1,
    borderColor:'rgba(256,256,256,0.1)',
    height: 64,
    justifyContent: 'center',
  },
  reelThumnail:{
    width:88,
    height:48,
    left: 16,
  },
  reelText:{
    color: '#FFFFFF',
    position:'absolute',
    height: 32,
    left: 128,
    top: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 0,
  },
  footerContainer:{
    position: 'absolute',
    bottom:0,
    width: '100%',
    height: 72,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#000000',
  },
  footerText:{
    color:'white',
    fontSize: 12,
  },
  homeButtonContainer:{
    width:'50%',
    position: 'absolute',
    left: 0,
    // backgroundColor: 'green',
    alignItems:'center',
    color:'#FC9D0F',
  },
  libraryButtonContainer:{
    width:'50%',
    position: 'absolute',
    right: 0,
    // backgroundColor: 'blue',
    alignItems:'center',
  },
});
