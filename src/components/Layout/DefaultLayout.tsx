import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface DefaultLayoutProps {
    children: ReactNode,
}

const Wrapper = styled.div`
    ${({ theme }) => theme.globalStyle}
`

const DefaultLayout = (props: DefaultLayoutProps) => {
    return <Wrapper>
        {props.children}
    </Wrapper>
}

export default DefaultLayout;