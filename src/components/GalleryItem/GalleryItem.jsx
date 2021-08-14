
function GalleryItem ({item}) {

    // could use state here to manage what's being presented, image vs text.

    const swap = () => {
        // logic if picture, change to text, if text change to picture
    }

    return (
        <>
            <img src={item.path} onClick={swap}/>
            <button>love it!</button>
            <p>{item.likes} people love this!</p>
        </>
    );

}


export default GalleryItem;