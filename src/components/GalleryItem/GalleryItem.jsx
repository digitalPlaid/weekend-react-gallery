import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem ({item, addLike}) {

    // could use state (boolean var) here to manage what's being presented, image vs text.
    let [imgOrTxt, setImgOrTxt] = useState(true); // default (false) is img
    let [displayValue, setDisplayValue] = useState(<img src={item.path} />);

    const swap = () => {
        console.log('in swap. currently display value: ', displayValue)
        // logic if picture, change to text, if text change to picture
        if (imgOrTxt) {
            // return the image text or whatever use a className for formatting
            setDisplayValue(<div className="description">{item.description}</div>);
        } else {
            setDisplayValue(<img src={item.path} />);
        };
        // return the actual image using className for css
        setImgOrTxt(!imgOrTxt);
    }

    const onButtonClick = () => {
        // wrapper function so we can pass the function that will 
        //actually do the work some context 
        addLike(item.id);
    }

    return (
        <div className="itemCard">
            {/* will need to add major styling so that the div isn't so huge... */}
            <div onClick={swap}>{displayValue}</div>
            <button onClick={onButtonClick}>love it!</button>
            <p>{item.likes} people love this!</p>
        </div>
    );

}


export default GalleryItem;