import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    flex-direction: row;
    padding: 12px 0;
    margin: 13px 0 0 0;
    width: 100%;
`;

export const Avatar = styled.Image`
    border-radius: 26px;
    height: 52px;
    margin-right: 12px;
    width: 52px;
`;

export const RepositoryInfo = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const OwnerInfoWrapper = styled.View`
    flex-direction: column;
    justify-content: space-between;
`;

export const RepositoryName = styled.Text`
    color: #000000;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.38px;
`;

export const OwnerLogin = styled.Text`
    color: #48484A;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
`;

export const Rating = styled.Text`
    color: #48484A;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-right: 4px;
`;

export const Divider = styled.View`
    background-color: #EBEBEB;
    height: 1px;
    margin-left: 58px;
    width: 100%;
`;