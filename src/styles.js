import { StyleSheet } from 'react-native';

const colors = {
    background: '#ACACAC',
};

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
});

export { colors, globalStyles };
