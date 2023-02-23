
import { Text,FlatList, StyleSheet, SafeAreaView,TextInput } from "react-native";
import data_list from "./data_list.json"
import StoreList from "./Components/StoreList/StoreListCard"
import { useState,useEffect} from "react";

function App(){
  
  const DataList=({item})=>
    <StoreList List={item}/>

  const [dataFilter, setDataFilter] = useState(data_list)
  const [search, setSearch] = useState('');
  

  useEffect(() => {
    filteredData();
  }, [search])

  const filteredData = () => {
    const filteredData = data_list.filter((q) =>q.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()))
     setDataFilter([...filteredData])
  }

  return(
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.headertext}>TECHNOLOGY STORE</Text>
      <FlatList 
      ListHeaderComponent={()=>(
         <TextInput
         style={styles.input}
         placeholder="Ara..."
         keyboardType="default"
         value={search}
         onChangeText={(e) => setSearch(e)}
       />)}
      keyExtractor={(item)=>item.id.toString()}
      data={dataFilter}
      renderItem={DataList}
      numColumns={2}
       />   
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  headertext:{
    fontWeight:"bold",
    fontSize:50,
    color:"purple",
    margin: 12
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor:"#DDDDDD",
    borderRadius:5   
  }
}) 

export default App;
