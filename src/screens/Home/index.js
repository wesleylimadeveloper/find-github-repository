import React, { useState } from 'react';
import { useToast } from 'react-native-toast-notifications';
import {
    Container,
    Title,
    Loading,
    NoDataContent,
    NoDataMessage,
    List
} from './styles';

import { SearchField } from '../../components/SearchField';
import { RepositoryListItem } from '../../components/RepositoryListItem';
import axios from 'axios';

export function Home() {
    const [searchFieldInput, setSearchFieldInput] = useState('');
    const [totalCount, setTotalCount] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    async function handleSearchRepositories() {
        if (searchFieldInput.trim() === '') {
            return toast.show(
                "Digite o nome do repositório que deseja buscar.", {
                type: "warning",
                placement: "bottom",
                duration: 3000,
                animationType: "slide-in",
                textStyle: {
                    fontSize: 16,
                    textAlign: "center"
                }
            });
        }

        try {
            setIsLoading(true);

            const { data: { total_count, items } } = await axios.get(`https://api.github.com/search/repositories?q=${searchFieldInput}&per_page=10`);

            setTotalCount(total_count);
            setRepositories(items);
            setIsLoading(false);
            
        } catch (error) {
            console.log(error);

            toast.show(
                "Ops... Sinto muito. Não foi possível buscar os repositórios, espere alguns minutos e tente novamente.", {
                type: "danger",
                placement: "bottom",
                duration: 3000,
                animationType: "slide-in",
                textStyle: {
                    fontSize: 16,
                    textAlign: "center"
                }
            });

            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Title>
                Repositórios
            </Title>

            <SearchField
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setSearchFieldInput}
                onSubmitEditing={handleSearchRepositories}
                placeholder="Busca por repositórios"
                value={searchFieldInput}
            />

            {isLoading &&
                <Loading />
            }

            {totalCount === 0 && !isLoading &&
                <NoDataContent>
                    <NoDataMessage>
                        Sua pesquisa - {searchFieldInput} - não encontrou nenhum repositório correspondente.
                    </NoDataMessage>
                </NoDataContent>
            }

            {repositories.length > 0 && repositories.total_count !== 0 && !isLoading &&
                <List
                    data={repositories}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <RepositoryListItem data={item} />}
                />
            }
        </Container>
    );
}