import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCustomerBlockDatas1, selectCustomerBlockDatas2 } from '../../../../../redux/selectors/customers-selector';
import s from './CustomerBlocks.module.scss';
import { Carousel } from 'antd';
import CustomerBlock from './CustomerBlock/CustomerBlock';


const CustomerBlocks: FC = () => {

    const customerBlockDatas1 = useSelector(selectCustomerBlockDatas1);
    const customerBlockDatas2 = useSelector(selectCustomerBlockDatas2);

    const customerBlocks = customerBlockDatas1.map((c) => {
        return <CustomerBlock key={c.id} avatar={c.avatar} name={c.name} title={c.title}
            text={c.text} webSiteName={c.webSite} webSiteUrl={c.webSiteUrl} />
    })

    const customerBlocks2 = customerBlockDatas2.map((c) => {
        return <CustomerBlock key={c.id} avatar={c.avatar} name={c.name} title={c.title}
            text={c.text} webSiteName={c.webSite} webSiteUrl={c.webSiteUrl} />
    })

    return (
        <div >
            <Carousel autoplay>
                <div>
                    <div className={s.customerBlocks}>
                        {customerBlocks}
                    </div>
                </div>
                <div>
                    <div className={s.customerBlocks}>
                        {customerBlocks2}
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default CustomerBlocks