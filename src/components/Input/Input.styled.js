import styled, {css} from 'styled-components';

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    width: 60%;
    height: 5rem;
    position: relative;
`;

const InputField = styled.input`
    width: 100%;
    height: 5rem;
    background-color: transparent;
    border: 0.125rem solid rgba(255, 255, 255, 0.2);
    outline: none;
    color:rgba(255, 255, 255, 1.0);
    padding-left:1.5rem;

    :hover {
        border-color: rgba(255, 255, 255, 1.0);
        box-shadow: 0 0 0.3125rem rgba(255, 255, 255, 0.8);
    }
`;

const InputLabel = styled.label`
    position: absolute;
    top:50%;
    left:1.5rem;
    transform: translateY(-50%);
    color:rgba(255, 255, 255, 0.6);
    font-size: 1.4rem;
    pointer-events: none;
    transition: .3s;
    letter-spacing: 0.15rem;
    background-color: transparent;
    padding:4px 8px;

    ${InputField}:focus ~ & {
        transform: translateY(-38px);
        color:rgba(255, 255, 255, 1.0);
        font-size: 1.2rem;
        background-image: var(--bg-body-image);
    }
`;

const InputError = styled.span`
    position: absolute;
    left:0%;
    bottom:-45%;
    color:#F5646B;
    font-size: 1.4rem;

`;

export { InputBox, InputField, InputLabel, InputError };