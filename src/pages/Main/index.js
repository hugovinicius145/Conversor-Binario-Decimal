import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton, Input } from './styles';

export default class Main extends Component{
    state = {
        binaryNumber: '',
        decimalNumber: '',        
    };

    handleInputChange = e => {
        let lastNumber = e.target.value.substring(e.target.value.length-1);

        if(lastNumber === '0' || lastNumber === '1' || lastNumber === ''){
            this.setState({ binaryNumber: e.target.value });
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        const { binaryNumber } =  this.state;

        this.setState({
            decimalNumber: parseInt(binaryNumber,2),
        });
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
                        placeholder="Digite 0 ou 1"
                        value={binaryNumber}
                        onChange={this.handleInputChange}
                        maxLength="8"
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