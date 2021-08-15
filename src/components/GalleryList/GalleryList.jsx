import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, addLike, deleteItem}) {

    return (
        <>
            {galleryList.map(element => <GalleryItem 
                                            item={element} 
                                            addLike={addLike} 
                                            key={element.id}
                                            deleteItem={deleteItem}
                                            />)}
        </>
    );
};

export default GalleryList;