import React, {useEffect, useState} from 'react';
import styles from './Board.module.css';

//Components
import Sticker from "../Stiker/Sticker";

function Board(props) {
    
    const [arrStickers, setSticker] = useState([]);
    
    useEffect(() => {
        const localData = localStorage.getItem('stickers');
        if (localData) {
            setSticker(JSON.parse(localData))
        }
    }, []);
    
    useEffect(() => {
        // console.log(3);
        localStorage.setItem('stickers', JSON.stringify(arrStickers));
    }, [arrStickers]);
    
        function  addSticker() {
            // arrStickers.push({id: Date.now(), value: '', isShown: true});
            setSticker([...arrStickers, {id: Date.now(), value: '', isShown: true}]);
        }
        
        function onDelete(id) {
            const newArr = arrStickers.filter((el) => {
                return el.id !== id
            });
            setSticker([...newArr]);
        }
    
        function onSave(obj) {
            const index = arrStickers.findIndex((item) => obj.id === item.id);
            
            const newArrStickers = [
                ...arrStickers.slice(0, index),
                { ...obj, isShown: !obj.isShown },
                ...arrStickers.slice(index+1)
            ];
            setSticker([...newArrStickers]);
        }
        
        function onValueChange(obj) {

            const index = arrStickers.findIndex((item) => obj.id === item.id);
            const newArrStickers = [
                ...arrStickers.slice(0, index),
                obj,
                ...arrStickers.slice(index+1)
            ];
            setSticker([...newArrStickers]);
        }
        
    return(
        <div className = { styles.desk_wrap }>
            <header className = { styles.header }>
                <button className = { styles.btn_add } onClick = { addSticker }>ADD</button>
            </header>
            <div className = { styles.container }>
                <div className = { styles.sticker_wrap }>
                    {arrStickers.map((item) => {
                    return <Sticker
                        key = {item.id}
                        item = {item}
                        onDelete = { onDelete }
                        onSave = { onSave }
                        onValueChange = { onValueChange }
                    />
                })}
                </div>
            </div>
        </div>
    )
}

export default Board;
