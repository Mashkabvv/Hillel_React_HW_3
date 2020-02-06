import React from 'react';
import styles from './Sticker.module.css';

//Components

function Sticker(props) {
    // console.log(props);
    
    return(
        <div className = { styles.sticker }>
            <header className = { styles.sticker_header }>
                <button className = { styles.btn_save } onClick = { () => props.onSave(props.item) }>{props.item.isShown ? 'Save' : 'Edit'}</button>
                <button className = { styles.btn_del } onClick = { () => props.onDelete(props.item.id) }>Del</button>
            </header>
            <div className = { styles.container }>
                {
                    props.item.isShown ? <textarea className = {styles.sticker_text} defaultValue={props.item.value} onChange = {(e) => props.onValueChange({id: props.item.id, value: e.target.value, isShown: props.item.isShown})}/>
                : <div className = { styles.sticker_content }>{props.item.value}</div>
                }
            </div>
        </div>
    )
}

export default Sticker;
