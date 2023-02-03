import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Avatar, 
    Container, 
    RepositoryInfo, 
    OwnerInfoWrapper, 
    RepositoryName, 
    OwnerLogin, 
    Rating,
    Divider
} from './styles';

export function RepositoryListItem({ data }) {
    const navigation = useNavigation();

    const { 
        full_name,
        name, 
        stargazers_count,
        owner: { avatar_url, login } 
    } = data;

    function goToRepository() {
        navigation.navigate("Repository", { full_name, name });
    }

    return (
        <>
            <Container onPress={goToRepository}>
                <Avatar source={{ uri: `${avatar_url}` }} />

                <RepositoryInfo>
                    <OwnerInfoWrapper>
                        <RepositoryName>
                            {name}
                        </RepositoryName>

                        <OwnerLogin>
                            {login}
                        </OwnerLogin>
                    </OwnerInfoWrapper>

                    <Rating>
                        {stargazers_count} {stargazers_count === 1 ? 'star' : 'starts'}
                    </Rating>
                </RepositoryInfo>
            </Container>
            <Divider />
        </>
    );
}