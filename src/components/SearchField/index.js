import React from 'react';
import { MagnifyingGlass } from 'phosphor-react-native';
import { 
    Container, 
    Input 
} from './styles';

export function SearchField({ ...rest }) {
    return (
        <Container>
            <MagnifyingGlass
                color="#3C3C4399" 
                weight="bold" 
                size={20} 
            />

            <Input  
                placeholderTextColor="#3C3C4399"
                {... rest }
            />
        </Container>
    );
}