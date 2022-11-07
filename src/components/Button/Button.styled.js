import styled from 'styled-components';

const StyledButton = styled.button`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0);
    border:0.125rem solid rgba(255, 255, 255, 0.2);
    height: 4.5rem;
    padding: 1.25rem 1.875rem;
    cursor: pointer;
    overflow: hidden;
    color:rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.2125rem;
    line-height: 1;
    text-align: center;
    position: relative;
    transition: border 1s cubic-bezier(0.19, 1, 0.22, 1), color 0.6s cubic-bezier(0.19, 1, 0.22, 1);

    :hover {
        border-color: rgba(255, 255, 255, 1.0);
        box-shadow: 0 0 0.3125rem rgba(255, 255, 255, 0.8);
        color: rgba(255, 255, 255, 1.0);
    }

    ::before{
        content: "";
        position: absolute;
        bottom:0%;
        left:-100%;
        width: 100%;
        height: 5%;
        background:linear-gradient(110deg, transparent,#FFFFFF,transparent);
        transition:all 750ms;
    }
    :hover::before{
        left: 100%;
    }
`;

export default StyledButton;