import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";
import { CategoryButton } from "@/components/category-button";
import {FlatList, View } from "react-native";
import { Header } from "@/components/header";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function hardleCategorySelect(selectCategory: string){
    setCategory(selectCategory);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={5} />

      <FlatList
      data={CATEGORIES}
      keyExtractor={( item ) => item}
      renderItem={({ item }) => (
        <CategoryButton
        title={item}
        isSelected={item === category}
        onPress={() => hardleCategorySelect(item)}
        />
      )}
      horizontal
      className="max-h-10 mt-5"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap:12, paddingHorizontal: 20}}
      />
    </View>
  );
}
