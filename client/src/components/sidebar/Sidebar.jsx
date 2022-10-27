import React, { useState, useContext} from 'react'
import { Layout } from 'antd';
import styles from './Sidebar.module.css'
import ListItem from '../listItem/ListItem';
import { NotesContext } from '../../context';
const { Sider } = Layout;

const Sidebar = (props)=>{
    const {listNotes} = useContext(NotesContext)

    return(
        <div className={styles.sidebarContainer}>
            <Sider
                // breakpoint="lg"
                // collapsedWidth="0"
              
                width='100%'
                style={{background: 'none', height: '100%'}}
                >
                {listNotes?.map(item=>
                <ListItem
                    key={Math.random()}
                    title={item.title}
                    text={item.text}
                    date={item.date}
                    id={item.id}
                    activeId={props.activeItemId}
                    setActiveItemId={props.setActiveItemId}
                />
                )}  
                
                
            </Sider>
        </div>
    )
}
export default Sidebar