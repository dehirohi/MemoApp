import { View, Text, StyleSheet } from 'react-native';
import { JSX } from 'react';

const Header = (): JSX.Element => {
    return (
            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end',
        paddingBottom: 8,
    },
    headerInner: {
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    headerTitle: {
        fontSize: 20,
        lineHeight: 32,
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default Header;