import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton, Input } from './styles';

export default class Main extends Component{
    state = {
        binaryNumber: '',
        decimalNumber: '',
    };

    handleInputChange = e => {
        this.setState({ binaryNumber: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();

        const { binaryNumber } =  this.state;

        this.setState({
            decimalNumber: parseInt(binaryNumber,2),
        });
    };

    checkNumberDifferent = e => {
        
    };

    render(){
        const { binaryNumber, decimalNumber } = this.state;
        return(
            <Container>
                <h1>Conversor de Binário Para Decimal</h1>
                <Form onSubmit={this.handleSubmit}>
                    <label>Número em Binário:</label>

                    <div>
                        <Input
                        type="text"
                        min="0"
                        placeholder="Digite 0 ou 1"
                        value={binaryNumber}
                        onChange={this.handleInputChange}
                        />

                        <SubmitButton>
                            <FaPlus color="#fff" size={14}/>
                        </SubmitButton>
                    </div>

                    <label>Resultado em Decimal:</label>

                    <Input 
                    type="text"
                    value={decimalNumber}
                    disabled                
                    />
                    
                </Form>                
            </Container>
        );
    }
}