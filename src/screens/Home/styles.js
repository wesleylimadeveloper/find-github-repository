import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: white;
    flex: 1;
    padding: 0 20px 0 16px;
`;

export const Title = styled.Text`
    color: #000000;
    font-size: 34px;
    font-weight: bold;
    margin: 36px 0 16px 0;
`;

export const Loading = styled.ActivityIndicator.attrs({
    color: '#000000',
})`
    margin-top: 96px;
`;

export const NoDataContent = styled.View`
    align-items: center;
    flex: 1;
    justify-content: center;
`;

export const NoDataMessage = styled.Text`
    font-size: 16px;
    text-align: center;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 28px;
`;