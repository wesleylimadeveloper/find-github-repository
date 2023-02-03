import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export function Repository({ route: { params } }) {
    const navigation = useNavigation();

    const { full_name, name } = params;

    function onLoad() {
        navigation.setOptions({
            title: `${name}`,
        });
    }

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <WebView
            source={{ uri: `https://github.com/${full_name}` }} 
        />
    );
}