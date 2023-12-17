import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { breakpoints } from "../../styles/theme";

const ModalWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
type DialogStyles = string;
type DialogTitle = string | React.ReactNode;

const Dialog = styled.div<{ $dialogStyles?: DialogStyles }>`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 25px;
    margin: 0;
    top: 64px;
    
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    > * {
        margin-bottom: 25px
    }



    @media(max-width: ${breakpoints.tablet}) {
        top: 0;
        padding: 10px 25px;
    }

    ${({ $dialogStyles }) => $dialogStyles}
`;

interface Modal extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    dialogStyles?: DialogStyles;
    onClose?: () => void;
    dialogTitle?: DialogTitle;
}


const Modal: React.FC<Modal> = (props) => {
    return props.isOpen && <ModalWrapper>
        <Dialog $dialogStyles={props.dialogStyles && JSON.parse(props.dialogStyles)}>
            <DialogHeader onClose={props.onClose} headerTitle={props.dialogTitle}/>
            {props.children}
        </Dialog>
    </ModalWrapper>
}

const DialogHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.gray};
`

const CloseBtn = styled.span`
    cursor: pointer;
`

interface DialogHeader extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
    headerTitle?: DialogTitle;
}


const DialogHeader: React.FC<DialogHeader> = (props) => {
    return <DialogHeaderWrapper>
        <>{props.headerTitle}</>
        <CloseBtn onClick={props.onClose}><FontAwesomeIcon icon={faTimes}/></CloseBtn>
    </DialogHeaderWrapper>
}

export default Modal;