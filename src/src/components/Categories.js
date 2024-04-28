import { View, Text ,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { categoryData } from '../constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Categories ({
    activeCategory ,
    handleChangeCategory,
    categories,}) {
  return (
    <View> 
        <ScrollView horizontal showsHorizontalScrollIndicator ={false}
        className="space-x-4"
        contentContenierStyle={{
            paddingHorizontal:15,
        }}
        >
            {categoryData.map((category, index) =>{
            let isActive = category.strCategory==activeCategory;
            let activeButtonClass = isActive ? "bg-[#f64e32]":"bg-black/10";

                return(
                    <TouchableOpacity 
                    key={index}
                    onPress={() => handleChangeCategory(category.strCategory)}
                    className="flex items-center space-y-1"
                    >
                        <View className={"rounded-xl p-[6px] " + activeButtonClass}></View>


                        <Image source={{
                            url:category.strCategoryThumb,
                        }}  
                        style= {{
                            width:hp(6),
                            height:hp(6),
                        }}
                        className="rounded-full"
                            />
                            <View>
                                <Text className="text-neutral-800"
                                style={{fontSize:hp(1.6),
                                }}>
                                    {category.strCategory}
                                </Text>
                                

                            
                            </View>
                            




                    </TouchableOpacity>
                );
            })}
        </ScrollView>
      <Text>Categories </Text>
    </View>
  )
}