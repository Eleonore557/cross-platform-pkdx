import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet,ScrollView  } from 'react-native';

export default class Second extends React.Component {

        constructor(props){
            super(props);
            this.state ={ isLoading: true, name: ''}
            
          }
        
          componentDidMount(){
            const {navigation} = this.props
            const getName = navigation.getParam('name')
            const url = navigation.getParam('url')
            const tab = url.split('/')
            const id = tab[6]
            return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
              .then((response) => response.text())
              .then((responseJson) => {
                responseJson = JSON.parse(responseJson)
                this.setState({
                  isLoading: false,
                  dataSource: responseJson,
                  name: getName,
                  type1: responseJson.abilities[0].ability.name,
                 url : url,
                 type2 : responseJson.abilities[0].ability.url,

                })
                console.log(typeof(this.state.dataSource));
              })
              .catch((error) =>{
                console.error(error);
              });
            }
        
          render(){
            
            if(this.state.isLoading){
              return(
                <View style={{flex: 1, padding: 20}}>
                  <ActivityIndicator/>
                </View>
              )
            }else{
              return(
        
                <ScrollView contentContainerStyle={styles.card}>
            {/*Use navigation.getParam to get the params of navigation prefered since you can set a default value
            therefore not returning undefined and not crashing your app. */}
                <Text style={styles.name}>{this.state.name}</Text>
                <Text style={styles.name}>{this.state.url}</Text>
            
                {/* <Text style={styles.nameOffilm}>{this.state.dataSource.ability}</Text> */}
                {/* <Text style={styles.name}>Description</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.description}</Text>
                <Text style={styles.name}>Director</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.director}</Text>
                <Text style={styles.name}>Producer</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.producer}</Text>
                <Text style={styles.name}>Release date</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.release_date}</Text>
                <Text style={styles.name}>Score</Text>
                <Text style={styles.nameOffilm}>{this.state.dataSource.rt_score}</Text> */}
                </ScrollView>
            );
            }

          }
        }


        const styles = StyleSheet.create({
            name: {
              flexDirection: 'row',
              padding: 20,
              justifyContent:'center'
            },
            id: {
          
              backgroundColor: '#DDDDDD',
              padding: 10,
              
            }
          })
