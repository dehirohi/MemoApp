import {View, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import MemoListItem from '../../components/MemoListItem';
import CircleButton from '../../components/CircleButton';

const List = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={{ flex: 1 }}>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton>＋</CircleButton>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        position: 'relative',
    },
});

export default List;