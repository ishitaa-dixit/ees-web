import './Gallery.css';
import { useEffect, useState } from "react";
import Layout from '../../components/Layout';

const GalleryData = [
    {
        id:1,
        title:"Events",
        image:"./images/img1.jpg"
    },
    {
        id:2,
        title:"Events",
        image:"./images/img2.jpg"
    },
    {
        id:3,
        title:"Events",
        image:"./images/img3.jpg"
    },
    {
        id:4,
        title:"Events",
        image:"./images/img4.jpg"
    },
    {
        id:5,
        title:"Pravardhan",
        image:"./images/img5.jpg"
    },
    {
        id:6,
        title:"Pravardhan",
        image:"./images/img6.jpg"
    },
    {
        id:7,
        title:"Pravardhan",
        image:"./images/img8.jpg"
    },
    {
        id:8,
        title:"Pravardhan",
        image:"./images/img10.jpg"
    },
    {
        id:9,
        title:"Workshop",
        image:"./images/img7.jpg"
    },
    {
        id:10,
        title:"Workshop",
        image:"./images/img9.jpg"
    },
]

const Gallery = () => {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.title))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.title == itemData);
    setData(filterData);
  }

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.image  } /></div> )
          }
        </div>
      </div>
    </div>
  );
}

export default Gallery;