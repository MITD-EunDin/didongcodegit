import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: "1", name: "Cardigan", image: require("../assets/img2.png") },
  { id: "2", name: "Bomber", image: require("../assets/img1.png") },
  { id: "3", name: "Varsity", image: require("../assets/img3.png") },
];

const popularItems = [
  { id: "1", name: "Áo 1", from: "By VietNam", price: "$1", image: require("../assets/img3.png") },
  { id: "2", name: "Áo 2", from: "By VietNam", price: "$3", image: require("../assets/img1.png") },
  { id: "3", name: "Áo 3", from: "By VietNam", price: "$5", image: require("../assets/img2.png") },
];

const Explorer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.screenTitle}>Explore</Text>
        <View style={styles.searchSection}>
          <Ionicons name="location-outline" style={styles.locationIcon} />
          <View style={styles.searchInputContainer}>
            <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
            <Ionicons name="search" style={styles.searchIcon} />
          </View>
        </View>

        <Text style={styles.categoriesTitle}>Top Categories</Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={styles.categoryList}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.popularTitle}>Popular Items</Text>
        <FlatList
          horizontal
          data={popularItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.popularItem}>
              <Image source={item.image} style={styles.popularImage} />
              <Text style={styles.popularName}>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={styles.popularList}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: "#f8f9fa" 
    },
    screenTitle: { 
      fontSize: 26, 
      fontWeight: "bold", 
      padding: 20, 
      color: "#333" 
    },
    searchSection: { 
      flexDirection: "row", 
      alignItems: "center", 
      paddingHorizontal: 20, 
      marginBottom: 20 
    },
    locationIcon: { 
      fontSize: 26, 
      color: "#ff6347", 
      marginRight: 10 
    },
    searchInputContainer: { 
      flex: 1, 
      flexDirection: "row", 
      alignItems: "center", 
      backgroundColor: "#fff", 
      borderRadius: 15, 
      paddingHorizontal: 15, 
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 3 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 5, 
      elevation: 3 
    },
    searchInput: { 
      flex: 1, 
      fontSize: 16, 
      color: "#333" 
    },
    searchIcon: { 
      fontSize: 24, 
      color: "gray" 
    },
  
    categoriesTitle: { 
      fontSize: 20, 
      fontWeight: "bold", 
      paddingHorizontal: 20, 
      marginBottom: 10, 
      color: "#333" 
    },
    categoryList: { 
      paddingLeft: 20 
    },
    categoryItem: { 
      alignItems: "center", 
      marginRight: 20, 
      backgroundColor: "#fff", 
      padding: 10, 
      borderRadius: 15, 
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 3 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 5, 
      elevation: 3 
    },
    categoryImage: { 
      width: 100, 
      height: 50, 
      borderRadius: 10 
    },
    categoryName: { 
      fontSize: 14, 
      marginTop: 4, 
      fontWeight: "bold", 
      color: "#333" 
    },
  
    popularTitle: { 
      fontSize: 20, 
      fontWeight: "bold", 
      paddingHorizontal: 20, 
      marginTop: 20, 
      marginBottom: 10, 
      color: "#333" 
    },
    popularList: { 
      paddingLeft: 20 
    },
    popularItem: { 
      marginRight: 20, 
      alignItems: "center", 
      backgroundColor: "#fff", 
      padding: 10, 
      borderRadius: 15, 
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 3 }, 
      shadowOpacity: 0.1, 
      shadowRadius: 5, 
      elevation: 3 
    },
    popularImage: { 
      width: 120, 
      height: 80, 
      borderRadius: 10 
    },
    popularName: { 
      marginTop: 5, 
      fontWeight: "bold", 
      color: "#333", 
      fontSize: 16 
    },
  });
  
export default Explorer;
