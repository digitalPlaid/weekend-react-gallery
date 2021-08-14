import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, addLike}) {

    return (
        <>
            {galleryList.map(element => <GalleryItem item={element} addLike={addLike} key={element.id}/>)}
        </>
    );
};

export default GalleryList;