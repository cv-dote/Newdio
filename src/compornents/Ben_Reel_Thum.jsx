import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Ben_Reel_Thum() {
  return (
    <View style={styles.container}>
      {/* Body container */}
      <ScrollView style={styles.reelListContainer}>
        <View style={styles.reelItem}>
          <Image
            style={styles.reelThumnail}
            source={{
              uri: `https://c.okmusic.jp/news_items/images/136428/more_large.jpg?1498916383`,
            }}
          />
          <Text style={styles.reelText}>生きたいんだよな</Text>
        </View>

        <View style={styles.reelItem}>
          <Image
            style={styles.reelThumnail}
            source={{
              uri: `https://shop.r10s.jp/surprise-web/cabinet/imgr_a091/wpcl-12996.jpg`,
            }}
          />
          <Text style={styles.reelText}>瞬間的シックスセンス</Text>
        </View>

        <View style={styles.reelItem}>
          <Image
            style={styles.reelThumnail}
            source={{
              uri: `https://youtuber-trend.com/wp-content/uploads/2020/06/AIMYON-TOUR-2019-SIXTH-SENSE-STORY-IN-YOKOHAMA-ARENA-1-728x410.jpg`,
            }}
          />
          <Text style={styles.reelText}>君はロックを聴かない</Text>
        </View>

        <View style={styles.reelItem}>
          <Image
            style={styles.reelThumnail}
            source={{
              uri: `https://i.ytimg.com/vi/FQHHA4SSXtg/maxresdefault.jpg`,
            }}
          />
          <Text style={styles.reelText}>マリーゴールド</Text>
        </View>

        <View style={styles.reelItem}>
          <Image
            style={styles.reelThumnail}
            source={{
              uri: `https://i2.wp.com/ume-fashion-12kk.com/wp-content/uploads/2019/08/SA60H8zolU8S5BnGVc63r2oIFsmEIU7t0aDRhgtH-e1589511434404.jpeg?fit=420%2C284&ssl=1`,
            }}
          />
          <Text style={styles.reelText}>小松菜奈</Text>
        </View>

        <View style={styles.reelItem}>
          <Image
            style={styles.reelThumnail}
            source={{
              uri: `https://img.cinematoday.jp/a/2M6VJKbn-T8y/_size_640x/_v_1607080608/main.jpg`,
            }}
          />
          <Text style={styles.reelText}>池田エライザ</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2D2D',
    color: '#FFFFFF',
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
});
