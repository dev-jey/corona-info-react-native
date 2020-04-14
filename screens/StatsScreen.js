import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Dimensions } from "react-native";
import {
    PieChart,
} from 'react-native-chart-kit'

class SingleRecipeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    pieData = [
        {
            name: 'Death Cases',
            population: 121778,
            color: 'red',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Recoveries',
            population: 460163,
            color: 'green',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Total Cases',
            population: 1947534,
            color: 'blue',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        }
    ];

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Statistics as of 14th April, 2020</Text>
                <PieChart
                style={styles.pie}
                    data={this.pieData}
                    width={Math.round(Dimensions.get('window').width)}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                          borderRadius: 16
                        }
                      }}
                  
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:22
    },
    pie:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:  Math.round(Dimensions.get('window').height) / 4
    },
    title: {    
        fontSize: 30,
        backgroundColor: 'green',
        color: '#fff',
        padding: 20,
        marginBottom: 10
    },
    
});


export default SingleRecipeScreen;