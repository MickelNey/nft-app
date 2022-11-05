import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useQuery} from "../../utils";
import {selectImageById} from "../../store/imagesReducer";
import { baseUrl } from "../../utils";

import styles from './SingleCartPage.module.css'
import {Loader, Trait} from "../../components";
import {Button, Collapse, Descriptions, Divider, Empty, Image} from "antd";

const { Panel } = Collapse

export const SingleCartPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { contractAddress = '', tokenId = '' } = useSelector((state) => selectImageById(state, id))
    const { data, isLoading, error } = useQuery(baseUrl + `asset/${contractAddress}/${tokenId}`, tokenId )

    if (isLoading)  {
        return <Loader text='Loading'/>
    } else if (error) {
        return <div>
            error: {error.message}
            <Button onClick={() => navigate('/')}>main page</Button>
        </div>
    }

    console.log(data)

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.title}>{data.name}</h2>

                    <h3 className={styles.ownerName}>Owned by <span>{data.top_ownerships[0].owner.user.username ?
                        data.top_ownerships[0].owner.user.username :
                        'unknown'}</span>
                    </h3>

                    <Divider style={{backgroundColor: '#C0BBBB'}} />

                    {data.traits.length !== 0 ?
                        <>
                            <h3>Traits</h3>

                            <div className={styles.traits}>
                            {data.traits.map((item) => (
                                <Trait
                                    className={styles.traits_elem}
                                    value={item.value}
                                    title={item.trait_type}
                                    key={item.trait_type}
                                />))}
                            </div>
                        </> :
                        <h3>Has not traits</h3>
                    }

                    <div className={styles.description}>
                        <Collapse collapsible="header" defaultActiveKey={['1']}>
                            <Panel header="Description" key="1">
                                {data.asset_contract.description ?
                                    <p>{data.asset_contract.description}</p> :
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='no description' />}
                            </Panel>
                        </Collapse>
                    </div>

                    <Descriptions
                        title="Sales info"
                        size='small'
                        bordered>
                        <Descriptions.Item span={3} label='Number of sales'>{data.num_sales}</Descriptions.Item>
                        <Descriptions.Item label='Last sale'>{data.last_sale ? data.last_sale : 'none'}</Descriptions.Item>
                    </Descriptions>

                    {data.external_link &&
                        <div className={styles.link}>
                            Original : <a href={data.external_link}>{data.external_link}</a>
                        </div>
                    }
                </div>

                <div className={styles.image_container}>
                        <Image className={styles.image}
                               preview={false}
                               alt='not found'
                               src={data.image_url}
                        />
                </div>
            </div>
        </div>
    )
}
