import React from 'react'
import moment from 'moment'
import styles from './ListItem.module.css'
import { useEffect } from 'react'
import { useState } from 'react'

const ListItem = (props)=>{
    const [date, setDate] = useState()

    function buildDate(){
        const dateNow = new Date()
        const dateEdit = new Date(props.date)
        if(dateEdit.getDate() === dateNow.getDate() && dateEdit.getMonth() === dateNow.getMonth() && dateEdit.getFullYear() === dateNow.getFullYear()){
            const dateMoment = moment(props.date).format('HH:mm')

            setDate(dateMoment)
        } else {
            const dateMoment = moment(props.date).format('DD.MM.Y')
            setDate(dateMoment)
        }
    }

    useEffect(()=>{
        buildDate()
    },[])
    return(
        <div className={styles.itemContainer}>
            <div className={styles.itemTitle}>
               {props.title}
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemContent__date}>
                    {date}
                </div>
                <div className={styles.itemContent__text}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}
export default ListItem