import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import moment from 'moment'
import styles from './WorkSpace.module.css'
import { useContext } from 'react'
import { NotesContext } from '../../context'
const { TextArea } = Input;

const WorkSpace = (props)=>{
    const [date, setDate] = useState()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const {activeItem, saveEdit} = useContext(NotesContext)
    function buildDate(date){
            const dateMoment = moment(date).format('DD MMMM Y, HH:mm')
            setDate(dateMoment)
        
    }

    function saveTitle(e){
        setTitle(e)
        buildDate(Date.now())
        saveEdit(activeItem.id, e, text, Date.now())
        
    }
    function saveText(e){
        setText(e)
        buildDate(Date.now())
        saveEdit(activeItem.id, title, e, Date.now())
        
    }

    useEffect(()=>{
        buildDate(activeItem?.date)
        setTitle(activeItem?.title)
        setText(activeItem?.text)
    },[activeItem])
    return(
        <div className={styles.worckSpaceContainer}>
            {props.editActive
            ?<> <div className={styles.worckSpaceContainer__date}>
            {date}
            </div>
            <div className={styles.worckSpaceContainer__title}>
                <TextArea value={title} onChange={(e)=>saveTitle(e.target.value)}/>
            </div>
            <div className={styles.worckSpaceContainer__text}>
                <TextArea value={text} onChange={(e)=>saveText(e.target.value)}/>
            </div>
            </>
            :<> <div className={styles.worckSpaceContainer__date}>
            {date}
            </div>
            <div className={styles.worckSpaceContainer__title}>
                {title}
            </div>
            <div className={styles.worckSpaceContainer__text}>
                {text}
            </div>
            </>
            }
        </div>
    )
}
export default WorkSpace