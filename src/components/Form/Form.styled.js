import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 400px;
    border: 0.2rem solid rgba(255, 255, 255, 0.2);
    padding:2rem 0;
    position: relative;

`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding:20px 0px;
    gap:3.8rem;

`;

export { FormWrapper, FormContainer };