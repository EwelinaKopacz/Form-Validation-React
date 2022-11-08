import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: absolute;
    top:0%;
    left:0%;
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:3rem 0;
`;

const ModalText = styled.p`
    text-align: center;
    padding:3rem 1rem 4rem 1rem ;

`;

export { ModalWrapper, ModalContainer, ModalText  };