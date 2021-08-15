import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

    let [galleryList, setGalleryList] = useState([])

    useEffect(() => {
        fetchGalleryList();
    }, []);

    const fetchGalleryList = () => {
        axios({
          method: 'GET',
          url: '/gallery'
        }).then(response => {
            console.log('Successfully retrieved galleryList', response.data);
            setGalleryList(response.data);
        }).catch(error => {
            console.log('Failed to GET galleryList: ', error);
            alert('Failed to GET gallery');
        })
    };

    const addLike = (id) => {
        axios({
          method: 'PUT',
          url: `/gallery/like/${id}`
        }).then(response => {
          console.log('sucessfully liked the image: ', id);
          fetchGalleryList(); 
        }).catch(error => {
          console.log(`Failed to PUT new like to item ${id}: `, error);
          alert('Failed to PUT. See console for details.');
        })
    }

    const addImage = (path, description) => {
        // collect info from the state variables managing that - create those and pass them through
        // send to server
        axios({
            method: 'POST',
            url: '/gallery',
            data: {path, description, likes: 0}
        }).then(response => {
            console.log('Successfully Posted new info.');
            fetchGalleryList();
        }).catch(error => {
            console.log('POST failed: ', error);
            alert('Failed to POST. See console for details.')
        });
    }

    const deleteItem = (id) => {
        axios.delete(`/gallery/${id}`).then(response => {
            console.log(`Succesful DELETE of ${id}`);
            fetchGalleryList();
        }).catch(error => {
            console.log('Failed to DELETE: ', error);
            alert('Failed to delete. See console for details.')
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <GalleryForm addImage={addImage}/>
            <GalleryList galleryList={galleryList} addLike={addLike} deleteItem={deleteItem} />
        </div>
    );
}

export default App;
