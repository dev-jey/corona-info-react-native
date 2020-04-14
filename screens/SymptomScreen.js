import React from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View
} from 'react-native';

class RecipeListScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Signs & Symptoms</Text>
                <FlatList
                    data={[
                        { key: 'Fever' },
                        { key: 'Cough' },
                        { key: 'Shortness of breath or difficulty breathing' },
                        { key: 'Tiredness' },
                        { key: 'Aches' },
                        { key: 'Runny nose' },
                        { key: 'Sore throat' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    title: {
        fontSize: 30,
        backgroundColor: 'green',
        padding: 20,
        color: '#fff',
        marginBottom: 10
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderColor: 'green',
        borderBottomWidth: 0.3
    },
});


export default RecipeListScreen;