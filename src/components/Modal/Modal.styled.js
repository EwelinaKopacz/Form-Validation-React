import styled, {keyframes,css} from 'styled-components';

const appear = keyframes`
    0% {
      translate: -50% 10%;
      scale: 0.5;
    }
    100% {
      scale: 1;
    }

`;

const bgAppear = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 1;
    }
`;


const ModalWrapper = styled.div`
    position: absolute;
    top:0%;
    left:0%;
    width: 100%;
    height: 100%;
    background-color: #16483E;
    opacity: 0;
    z-index: 1000;

    ${props => props.className === "wrapper-open" && css`
        animation: ${bgAppear} .5s;
        animation-fill-mode: forwards;
    `}

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

    ${props => props.className === "modal-open" && css`
        animation: ${appear} 0.5s;`
    }
`;

const ModalText = styled.p`
    text-align: center;
    padding:3rem 1rem 4rem 1rem ;

`;

export { ModalWrapper, ModalContainer, ModalText  };