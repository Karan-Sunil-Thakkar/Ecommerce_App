import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import Toast from 'react-native-easy-toast'; // assuming you're using this package

const MyComponent = () => {
    const toastRef = useRef(null);

    return (
        <View>
            <Button
                title="Press me"
                onPress={() => {
                    toastRef.current.show('hello world!', 2000);
                }}
            />
            <Toast
                ref={toastRef}
                style={{ backgroundColor: 'blue' }}
                position="top"
            />
        </View>
    );
};

export default MyComponent;
