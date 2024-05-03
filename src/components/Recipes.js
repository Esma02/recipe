import { View, Text } from 'react-native'
import React from 'react'
import RecipesCard from './RecipesCard'
import {userNavigation} from "@react-navigation/native";    

export default function Recipes({meals,categories}) {
  return (
    <View>
      <Text>Recipes</Text>
      <RecipesCard/>
    </View>
  )
}