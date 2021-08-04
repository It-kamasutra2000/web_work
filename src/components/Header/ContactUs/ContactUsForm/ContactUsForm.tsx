import React from "react";
import { Input, Form, Row, Col, Button } from "antd";
import { Form as FormikForm, Field, FormikHelpers, FieldProps } from "formik";
import { Formik, ErrorMessage } from 'formik';
import s from './ContactUsForm.module.scss';
import TextArea from "antd/lib/input/TextArea";
import { required } from "../../../../utils/validators/validators";
import { Modal } from 'antd';


const FormItem = Form.Item;


type ContactUsFormValuesType = {
    email: string
    name: string
    subject: string
    message: string
    contact: string
}

type ContactUsFormPropsType = {
    handleOk: () => void
    handleCancel: () => void
    isModalVisible: boolean

}

export type FormActionsType = FormikHelpers<ContactUsFormValuesType>

const ContactUsForm: React.FC<ContactUsFormPropsType> = React.memo(({handleCancel, handleOk, isModalVisible}) => {

    const submit = (values: ContactUsFormValuesType, actions: FormActionsType,) => {
        setTimeout(() => {
            actions.setSubmitting(false);
        }, 400);
    }


    return (
        <Formik
            initialValues={{ email: '', name: '', subject: '', message: '', contact: '' }}
            validate={(value) => {

            }}
            onSubmit={submit}
        >
            {({ isSubmitting, resetForm, errors, setSubmitting, setErrors }) => (
                 <Modal width={700} title="Get In Touch" visible={isModalVisible} onCancel={handleCancel}
                 footer={[
                    <Button htmlType={"submit"} type={'primary'} onClick={() => {
                        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
                                resetForm({})
                                handleOk()
                                setSubmitting(false)
                        }

                    }}>      save
                    </Button>,
                    <Button onClick={() => {
                        handleCancel()
                    }}>
                        cancel
                    </Button>
                ]}>
                <FormikForm className={s.form}>
                    <Row>
                        <Col span={11}>
                            <FormItem >
                                <label htmlFor="name">name</label>
                                <Field name="name"
                                    validate={required}
                                    render={({ field }: FieldProps) => <Input id='name'{...field} placeholder="name"  autoFocus={true} />} />
                                <ErrorMessage name="name" component={() => <div className={s.error}>{ errors.name }</div>} />
                            </FormItem>
                            <FormItem >
                                <label htmlFor="subject">subject</label>
                                <Field name="subject"
                                    render={({ field }: FieldProps) => <Input id={'subject'} {...field} placeholder="subject" />} />
                                <ErrorMessage name="subject" component={() => <div className={s.error}>{ }</div>} />
                            </FormItem>
                        </Col>
                        <Col offset={1} span={11}>
                            <FormItem>
                                <label htmlFor="email">email</label>
                                <Field name="email"

                                    render={({ field }: FieldProps) => <Input id={'email'} {...field} type="email" placeholder="email" />} />
                                <ErrorMessage name="email" component={() => <div className={s.error}>{errors.email}</div>} />
                            </FormItem>
                            <FormItem >
                                <label htmlFor="contact">contact</label>
                                <Field name="contact"
                                    render={({ field }: FieldProps) => <Input.Password id={'contact'} {...field} placeholder="contact" />} />
                                <ErrorMessage name="contact" component={() => <div className={s.error}>{ }</div>} />
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <FormItem >
                                <label htmlFor="message">message</label>
                                <Field name="message"
                                    render={({ field }: FieldProps) => <TextArea  className={s.message} id={'message'} {...field} placeholder="message" />} />
                                <ErrorMessage name="message" component={() => <div className={s.error}>{ }</div>} />
                            </FormItem>
                        </Col>
                    </Row>
                </FormikForm>
                </Modal>
            )}
        </Formik>
    )
});

export default ContactUsForm;