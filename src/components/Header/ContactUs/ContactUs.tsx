import { useSelector } from 'react-redux';
import { selectColor } from '../../../redux/selectors/content-selector';
import s from './ContactUs.module.scss';
import { useState } from 'react';
import ContactUsForm from './ContactUsForm/ContactUsForm';

const ContactUs = () => {

    const selectedColor = useSelector(selectColor);

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div className={s.contactUS}>
            <button style={{ background: selectedColor }} onClick={() => {
                setIsModalVisible(true)
            }}>
                Contact Us
            </button>
               <ContactUsForm handleOk={handleOk} handleCancel={handleCancel} isModalVisible={isModalVisible} />
        </div>
    )
}

export default ContactUs