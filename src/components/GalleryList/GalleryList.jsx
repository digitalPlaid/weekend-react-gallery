import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {

    return (
        <>
            {galleryList.map(element => <GalleryItem item={element} />)}
        </>
    );
};

export default GalleryList;