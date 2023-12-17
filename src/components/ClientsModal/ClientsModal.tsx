import { useState, HTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { useClientModalContext } from "../../utils/ClientModalContext";
import Modal from "../Modal";
import { css, styled } from 'styled-components';
import TextField from "../TextField";
import { FormattedMessage } from "react-intl";
import Button from '../Button';
import { addClient } from '../../slices/clients';
import { ClientInfo } from '../../types/Client';
import { useFormik } from 'formik'
import { breakpoints } from "../../styles/theme";

const DynamicFormattedMessage = FormattedMessage;

const DialogStyles = css`
    background-color: white;
    height: 280px;
    width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lighterGray};
    border-radius: 8px;

    @media(max-width: ${breakpoints.tablet}) {
        width: 100%;
        height: 100%;
        top: 0;
    }
`;

const DialogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const dialogTitle = <FormattedMessage 
    id="client_table.create_new_client_title"
    defaultMessage={"Create new client"}
/>;

const StepIndicatorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`

const StepIndicator = styled.div<{ $active: boolean, $disabled: boolean }>`
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.colors.black};
    align-items: center;
    font-size: 12px;

    font-weight: ${({ $active, $disabled }) => ($active || !$disabled) ? 'bold': 'normal'};
    > {
        margin-left: 50px;
    }

    ${({ $disabled }) => $disabled && css`
        color: ${({ theme }) => theme.colors.lightestGray}
    `}
`;

const StepIcon = styled.div<{ $active: boolean, $disabled: boolean, $complete: boolean }>`
    width: 18px;
    height: 18px;
    background-color: ${({ theme, $disabled }) => $disabled ? theme.colors.lightestGray : theme.colors.brightBlue};
    border-radius: 50%;
    font-size: 10px;
    text-align: center;
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme, $complete }) => $complete && css`
        background-color: ${theme.colors.green}
    `}
`;

type InputType = "textfield" | "radio"

interface StepperProp extends HTMLAttributes<HTMLDivElement> {
    pages: StepperPage[];
}

type StepperPage = {
    title: string;
    fields: CustomInputFields[];
};

type CustomInputFields = {
    inputName: string;
    inputLabel?: string;
    inputType: InputType;
    inputValue?: string;
};

const InputMap = {
    textfield: TextField,
    radio: TextField
}

const FormField = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

const CTAButtonWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    :last-child {
        margin-left: auto;
    }
`

const StepperWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
const Stepper: React.FC<StepperProp> = ({ pages }) => {
    const dispatch = useDispatch();
    const clientModal = useClientModalContext();
    const [currentStep, setCurrentStep] = useState(0);
    const currentPage = pages[currentStep];

    const handleNextAndSubmit = async () => {
        const formikErrors = await formik.validateForm(formik.values);
        if (pages[currentStep].fields.some(({ inputName }) => Object.keys(formikErrors).some(errorKey => errorKey === inputName))) {
            return;
        }
        
        if(isLastStep) {
            dispatch(addClient(formik.values));
            clientModal?.closeModal();
        }

        setCurrentStep((prevStep) => Math.min(prevStep + 1, pages.length - 1));

    };
  
    const handlePrev = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === pages.length - 1;

    const formik = useFormik<ClientInfo>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        validate: (values) => {
            const errors: Partial<ClientInfo> = {};

            if (!values.firstName) {
                errors.firstName = "Required"
            }

            if (!values.lastName) {
                errors.lastName = "Required";
            }

            if (values.phone && !/^\+?\d+$/.test(values.phone)) {
                errors.phone = "Invalid phone number"
            }

            if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }

            return errors;
        },
        onSubmit: () => {}
    })

    return <StepperWrapper><form onSubmit={formik.handleSubmit}>
        <StepIndicatorWrapper>
        {
            pages.map(({ title }, index) => (
                <StepIndicator $active={currentStep === index} $disabled={currentStep !== index && currentStep < index}>
                    <StepIcon $active={currentStep === index} $disabled={currentStep !== index} $complete={currentStep > index}>{currentStep > index ? '✓' : index + 1}</StepIcon>
                    {title}
                </StepIndicator>))
        }
        </StepIndicatorWrapper>
        {
            currentPage.fields && currentPage.fields.map((field) => {
            const InputField = InputMap[field.inputType];

            return <FormField
                key={field.inputName}
            ><InputField
                value={formik.values[field.inputName]}
                id={field.inputName}
                label={field.inputLabel}
                name={field.inputName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors[field.inputName] && (
                    <DynamicFormattedMessage
                        id={`client_form_error.${field.inputName}`}
                        defaultMessage={formik.errors[field.inputName]}
                    />
                )}
                {...(formik.errors[field.inputName] ? {className: 'has_error'} : {})}
            />
            </FormField>
            })
        }
        <CTAButtonWrapper>
            {!isFirstStep && <Button onClick={handlePrev}>Back</Button>}
            <Button onClick={handleNextAndSubmit} $variant='primary'>
                {isLastStep ? 'submit' : 'continue'}
            </Button>
        </CTAButtonWrapper>
    </form>
    </StepperWrapper>
}

const CreateClientForm = () => {
    const createClientJSON = {
        pages: [
            {
                title: "Personal details",
                fields: [
                    {
                        inputName: "firstName",
                        inputLabel: "First Name",
                        inputType: "textfield",
                        inputValue: ""
                    },
                    {
                        inputName: "lastName",
                        inputLabel: "Last Name",
                        inputType: "textfield",
                        inputValue: ""
                    }
                ] as CustomInputFields[]
            },
            {
                title: "Contact details",
                fields: [
                    {
                        inputName: "email",
                        inputLabel: "Email",
                        inputType: "textfield",
                        inputValue: ""
                    },
                    {
                        inputName: "phone",
                        inputLabel: "Phone number",
                        inputType: "textfield",
                        inputValue: ""
                    }
                ] as CustomInputFields[]
            }
        ]
    };

    return <Stepper pages={createClientJSON.pages}/>
}

const ClientsModal = () => {
    const modalContext = useClientModalContext();
    return <Modal
        isOpen={modalContext?.modalState.isModalOpen ?? false}
        dialogStyles={JSON.stringify(DialogStyles)}
        dialogTitle={dialogTitle}
        onClose={modalContext?.closeModal}
    >
        <DialogWrapper>
            <CreateClientForm />
        </DialogWrapper>
    </Modal>
}

export default ClientsModal;