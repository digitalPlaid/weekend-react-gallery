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

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <p>Gallery goes here</p>
            <GalleryList galleryList={galleryList} />
            <br></br>
            <img src="images/goat_small.jpg"/>
        </div>
    );
}

export default App;
