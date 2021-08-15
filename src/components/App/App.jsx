import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

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

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <p>Gallery goes here</p>
            <GalleryList galleryList={galleryList} addLike={addLike} />
        </div>
    );
}

export default App;
