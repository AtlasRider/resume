import { StyleSheet } from 'react-native';

const colors = {
    background: '#ACACAC',
};

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
    },
});

export { colors, globalStyles };
