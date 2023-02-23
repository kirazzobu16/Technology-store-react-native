import {Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
 container:{
    backgroundColor:"grey",
    borderRadius:10,
    width:Dimensions.get("window").width/2,
    margin:2,
    padding:5,
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between"
 },
 image:{
    height:Dimensions.get("window").height/4,
    borderTopLeftRadius:10, 
    borderTopRightRadius:10   
 },
 title:{
    fontWeight:900
 },
 price:{
    fontWeight:500
 },
 inStock:{
   color:"red",
   fontWeight:500
 }
 
})