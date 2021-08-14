import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, addLike}) {

    return (
        <>
            {galleryList.map(element => <GalleryItem item={element} addLike={addLike} />)}
        </>
    );
};

export default GalleryList;