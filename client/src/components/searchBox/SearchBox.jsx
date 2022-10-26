import React from 'react'
import { EditOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd';
import styles from './SearchBox.module.css'

const SearchBox = ()=>{
    return(
        <div className={styles.container}>
            <Input placeholder="Search..." className={styles.searchInput}/>
            <Button type="primary" className={styles.button} icon={<FileAddOutlined />}/>
            <Button type="primary" className={styles.button} icon={<EditOutlined />}/>
            <Button type="primary" className={styles.button} icon={<DeleteOutlined />}/>
        
        </div>
    )
}
export default SearchBox