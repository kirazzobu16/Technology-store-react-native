import React, { useState } from "react";
import { View,Text, Image } from "react-native";
import styles from "./StoreListCard.style"
const StoreList=({List})=>{
    
    const[isStock]=useState(List.inStock)
    
    return(
     <View style={styles.container}>
        <Image style={styles.image} source={{uri:List.imgURL}} />
        <Text style={styles.title}>{List.title}</Text>        
        {
            isStock? <Text style={styles.price}>{List.price}</Text>:  <Text style={styles.inStock}>Stok yok</Text>
        }
     </View>
    )
}

export default StoreList