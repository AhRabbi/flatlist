
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const courses = [
    {
      id:1,
      name:'rabbi 1'
    },
    {
      id:2,
      name: 'rabbi 2'
    },
    {
      id:3,
      name: 'rabbi 3'
    },
    {
      id: 4,
      name: 'rabbi 4'
    },
    {
      id: 5,
      name: 'rabbi 5'
    },
    {
      id: 6,
      name: 'rabbi 6'
    },
    {
      id: 7,
      name: 'rabbi 7'
    },
    {
      id: 8,
      name: 'rabbi 8'
    },
    {
      id: 9,
      name: 'rabbi 9'
    }
  ]
  const onecourse = ({item})=>(
    <View style= {styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  )

  const listHeader = () => 
  {
    return <Text style={styles.headerText}>rabbis flat list</Text>
  }

  const itemSeparator = () => {
    return <View style={styles.separator}/>
  
  }
  
  return (
    <SafeAreaView>
     <FlatList
     ListHeaderComponentStyle={styles.listHeader}
     ListHeaderComponent={listHeader}
     data={courses}
     renderItem= {onecourse}
     ItemSeparatorComponent = { itemSeparator }
     ListEmptyComponent = {<Text>This is a flat list</Text>}
    
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  
  {
    
    listHeader:{
      marginTop: 100,
 height: 55,
 alignItems: 'center',

 justifyContent: 'center',
 
    },
    headerText:{
      fontWeight: '600',
      fontSize: 26,
      color: 'black',
      
    },
    item:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,
      backgroundColor:"blue",
      margin:10
      
    },
    name:{
      fontWeight: '600',
      fontSize: 40,
      marginLeft: 13,
      color:"white"
      
  
    },
 separator: {
  color: '#000000',
  height:1,
  width: '100%',
  backgroundColor: '#ccc'
 }
});