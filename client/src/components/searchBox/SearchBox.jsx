import React from 'react'
import { EditOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd';
import styles from './SearchBox.module.css'
import { useContext } from 'react';
import { NotesContext } from '../../context';

const SearchBox = ()=>{
    const {setQuery,
        editItem,
        cteateItem,
        deleteItem,} = useContext(NotesContext)
    return(
        <div className={styles.container}>
            <Input style={{width: 300, marginRight: 20}} placeholder="Search..." className={styles.searchInput} onChange={e => setQuery(e.target.value)}/>
            <Button type="primary" className={styles.button} icon={<FileAddOutlined />} onClick={()=>cteateItem()}/>
            <Button type="primary" className={styles.button} icon={<EditOutlined />} onClick={()=>editItem()}/>
            <Button type="primary" className={styles.button} icon={<DeleteOutlined />} onClick={()=>deleteItem()}/>
        
        </div>
    )
}
export default SearchBox