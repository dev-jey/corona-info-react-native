import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native';

class AboutScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Basic Information</Text>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.main}>
                        Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:
                    </Text>
                    <Text style={styles.text}> Wash your hands frequently </Text>
                    <Text style={styles.text}>
                        Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.

                                Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.


                    </Text>
                    <Text style={styles.text}>Maintain social distancing</Text>
                    <Text style={styles.text}>
                        Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
                        
                        Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.
               </Text>
                    <Text style={styles.text}>Avoid touching eyes, nose and mouth</Text>
                    <Text style={styles.text}>
                        Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.
               </Text>
                    <Text style={styles.text}> Practice respiratory hygiene</Text>
                    <Text style={styles.text}>
                        Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.
                        
                        Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.
               </Text>
                    <Text style={styles.text}>If you have fever, cough and difficulty breathing, seek medical care early</Text>
                    <Text style={styles.text}>
                        Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
                        
                        Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
                </Text>
                    <Text style={styles.text}>Stay informed and follow advice given by your healthcare provider</Text>
                    <Text style={styles.text}>
                        Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.
                        
                        Why? National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves.
                        
                </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        backgroundColor: 'green',
        color: '#fff',
        padding: 20,
        marginBottom: 10,
    },
    main: {
        fontSize: 20,
        margin: 10,
        color: 'black'
    },
    text: {
        fontSize: 16,
        padding: 10
    },
    scrollView: {
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        paddingTop: 22
    }
});


export default AboutScreen;