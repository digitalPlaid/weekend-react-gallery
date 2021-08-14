import {useState} from 'react';

function GalleryItem ({item, addLike}) {

    // could use state (boolean var) here to manage what's being presented, image vs text.

    const swap = () => {
        // logic if picture, change to text, if text change to picture

    }

    const onButtonClick = () => {
        console.log(item.id);
        addLike(item.id);
    }

    return (
        <>
            <img src={item.path} onClick={swap}/>
            <button onClick={onButtonClick}>love it!</button>
            <p>{item.likes} people love this!</p>
        </>
    );

}


export default GalleryItem;