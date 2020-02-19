import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px  rgba(0,0,0,0.1);
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    label{
        font-size: 15px;
        color: rgb(102, 102, 102);
        font-weight: bolder;
        margin-bottom: 5px;
    }

    div{
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
    }
`;

export const Input = styled.input`
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background: #FFF;
`;

export const SubmitButton = styled.button`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
`;