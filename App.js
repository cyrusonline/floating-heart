import React, {useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Animated} from 'react-native';
import {AntDesign} from '@expo/vector-icons'
let heartCount = 1
export default function App() {
 
  const [hearts, setHearts] = useState([])
  const getRandomNumber = (min,max) => {
    return Math.random()*(max-min)+min
  }
  const addHeart = () => {
    setHearts(hearts.concat({id:heartCount, right:getRandomNumber(5,20)}))
    heartCount ++;
  }
  return (
    <View style={styles.container}>
   <View>
     {hearts.map(heart=>{
       return <HeartContainer key={heart.id} style={{right:heart.right}}/>
     })}
   </View>
      <TouchableOpacity onPress={addHeart} style={styles.addButton}>
        <AntDesign name="plus" size={24} color="#FFF"/>
      </TouchableOpacity>
    </View>
  );
}

const Heart = props => (
  <View {...props} style={[styles.heart,props.style]}>
    <AntDesign name="heart" size={48} color={props.color}/>
  </View>
)

const HeartContainer  = props=> (
  <Animated.View style={[styles.heartContainer], props.style}>
  <Heart color="red"/>
  </Animated.View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton:{
    backgroundColor:'#fc03d3',
    width:60,
    height:60,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    bottom:32,
    left:32
  },
  heartContainer:{
    position:"absolute",
    bottom:30,
    backgroundColor:"transparent"
  },
  heart:{
    width:50,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"transparent"
  }
});
