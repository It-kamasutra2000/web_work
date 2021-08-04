import s from './EmailForm.module.scss';
import React, { useState } from 'react';
import { Form as FormikForm, Field, FormikHelpers } from 'formik';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../../../redux/selectors/content-selector';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';



type EmailFormValuesType = {
    email: string
}
export type FormActionsType = FormikHelpers<EmailFormValuesType>


const EmailForm: React.FC = React.memo(() => {

    const [focus, setFocus] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)
    const selectedColor = useSelector(selectColor)

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (!e.defaultPrevented) {
                setFocus(false)
            }
        }
        window.onclick = listener

        return () => {
            window.onclick = null
        }
    })


    const submit = (values: EmailFormValuesType, actions: FormActionsType,) => {
        setTimeout(() => {
            ;
            actions.setSubmitting(false);
        }, 400);
    }

    return (
        <Formik
            initialValues={{ email: '' }}
            validate={(value) => {

            }}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <FormikForm className={s.form}>
                    <Field style={{ border: `2px solid ${focus ? selectedColor : '#d9d9d9'}` }} onClick={(e: MouseEvent) => {
                        setFocus(true);
                        e.preventDefault();
                    }}
                        className={s.email}
                        name='email'
                        type='email'
                        placeholder='Your email address' />
                    <NavLink to={'#'} style={{ background: hover ? '#36424D' : selectedColor }}
                     onMouseOver={() => {
                        setHover(true)
                    }}
                        onMouseLeave={() => {
                            setHover(false)
                        }}
                    >
                        Start your 7 days free trial today
                    </NavLink>
                </FormikForm>
            )}
        </Formik>
    )
});

export default EmailForm;