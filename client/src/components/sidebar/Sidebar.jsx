import React, { useState, useContext} from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import styles from './Sidebar.module.css'
import ListItem from '../listItem/ListItem';
import { NotesContext } from '../../context';
const { Sider } = Layout;

const Sidebar = (props)=>{
    const listNotes = useContext(NotesContext)
    console.log(listNotes)
    return(
        <div className={styles.sidebarContainer}>
            <Sider
                // breakpoint="lg"
                // collapsedWidth="0"
                width='100%'
                >
                {listNotes?.map(item=>
                <ListItem
                    key={Math.random()}
                    title={item.title}
                    text={item.text}
                    date={item.date}
                />
                )}  
                
                
            </Sider>
        </div>
    )
}
export default Sidebar