import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton,DivRow, BinaryInput, DecimalInput } from './styles';

export default class Main extends Component{
    render(){
        return(
            <Container>
                <h1>Conversor de Binário Para Decimal</h1>
                <Form onSubmit={() => {}}>
                    <label>Número em Binário:</label>

                    <DivRow>
                        <BinaryInput
                        type="number"
                        min="0"
                        placeholder="Digite 0 ou 1"                    
                        />

                        <SubmitButton>
                            <FaPlus color="#fff" size={14}/>
                        </SubmitButton>
                    </DivRow>

                    <label>Resultado em Decimal:</label>

                    <DecimalInput 
                        type="text"
                        value={() => {}}
                        disabled                
                    />
                    
                </Form>
                
            </Container>
        );
    }
}