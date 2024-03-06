import { useEffect, useState } from 'react';
import React from 'react'
import { Button , Modal , Form } from 'react-bootstrap'
import { addCategoryAPI, getCategoryAPI, getVideoAPI, removeCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';


function Category(removeCategoryVideoResponse) {
  const [allCategories,setAllCategories] = useState([])
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState('')
  
  const handleRemoveCategoryBtn = async(cId)=>{
    await removeCategoryAPI(cId)
    getAllCategories()
  }

  const handleClose = () => {
    setShow(false)
    setCategoryName('')
  };
  const handleShow = () => setShow(true);
  const handleAddCategory = async ()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideo:[]})
      handleClose()
      getAllCategories()
    }
    else{
      alert('please fill the form completely!!!')
    }
  }

  const getAllCategories = async ()=>{
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }
  console.log(allCategories);

  useEffect(()=>{
    getAllCategories()
 
  },[removeCategoryVideoResponse])

  const dragOverCategory = (e)=>{
    e.preventDefault()
    console.log("dragging over category");
  }

  const videoDropped = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData('videoId')
      console.log(`Video dropped with vId ${videoId},inside categoryId: ${categoryId}`);
      //get details of video
      const {data} = await getVideoAPI(videoId)
      console.log(data);
      //get category details where we have added video
      let selectCategory = allCategories.find(c => c.id === categoryId)
      selectCategory.allVideo.push(data)
      console.log(selectCategory);
      //update category 
      await updateCategoryAPI(categoryId,selectCategory)
       getAllCategories()
  

  }

  const videoDragStarted = (e,videoId,categoryId) => {
    console.log(`${categoryId},${videoId}`);
    let dataShare = {videoId, categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare));
  }

  return (
    <>
    <div className="d-flex justify-content-around">
    <h3>All Categories</h3>
    <Button className='btn btn-info' variant="primary" onClick={handleShow}>
        Add New Category <i className='btn fa-solid fa-plus'></i>
      </Button>
    </div>
    

      <div className="conatainer-fluid mt-3">
        {allCategories.length>0? allCategories.map((item,index)=>(
            <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-4 mb-3">
              <div className='d-flex justify-content-between'>
               <h5>{item.categoryName}</h5>
               <button onClick={()=>handleRemoveCategoryBtn(item.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
              <div className="row mt-2">
                {
                  item.allVideo?.length>0 &&
                  item.allVideo.map((video,index)=>(
                    <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
                      <VideoCard insideCategory={true} displayData={video}/>
                    </div>
                  ))
                }
              </div>
              
            
            </div>
          ))
          
          :
          <div className='text-danger fw-bolder'>no categories added</div>
          
        }
      </div>


      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details !!!</p>
        <Form.Label htmlFor="Category">Category Name</Form.Label>
      <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)}
        type="text"
        id="Category"
        placeholder='category name'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  className='btn btn-info' variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category