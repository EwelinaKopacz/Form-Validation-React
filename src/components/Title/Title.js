import React from 'react';
import HeaderH2 from './Title.styled';

const Title = ({children}) => {
    return (
        <header>
            <HeaderH2>{children}</HeaderH2>
        </header>
    );
}

export default Title;