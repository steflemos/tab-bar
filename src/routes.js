import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Lista from './pages/Lista/index';
import New from './pages/New/index'
import Ranking from './pages/Ranking/index'
import Conquistas from './pages/Conquistas/index'
//import RankingLider from './pages/RankingLider/index'

import {Entypo, Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
       tabBarOptions={{
           style:{
               backgroundColor:'#615D6C',
               borderTopColor:'#6F8AB7',
           },
           activeTintColor:'#fff',
           tabStyle:{
               paddingBottom:5,
               paddingTop:5,
           }
       }}
        >
            <Tab.Screen name="Lista de tarefas" component={Lista}
            options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name= "add-to-list" size={size} color={color}/>
                )
            }}
            />
       
            <Tab.Screen name="Nova tarefa" component={New}/>

            <Tab.Screen name="Conquistas" component={Conquistas}/>

            <Tab.Screen name="Ranking" component={Ranking}/>

           {/* <Tab.Screen name="Ranking Lider" component={RankingLider}/> */}
        </Tab.Navigator>

    )
    }
