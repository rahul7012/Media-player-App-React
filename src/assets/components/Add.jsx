import React, { useState } from 'react'
import { Modal , Button , Form , FloatingLabel } from 'react-bootstrap'
import { Await, Link } from 'react-router-dom';
import { uploadVideoAPI } from '../../services/allAPI';

function Add({setUploadVideoResponse}) {

    const  [uploadVideo,setUploadVideo] =useState({caption:'',imageURL:'',youtubeLink:''})
    const [show, setShow] = useState(false);

    const getYoutubeEmbedLink= (link)=>{
      if (link.includes('v=')) {
        let videoId = link.split('v=')[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }
      else{
        setUploadVideo({...uploadVideo,youtubeLink:""})
        alert('input proper youtube link')
      }
    }


    const handleClose = () => {
      setShow(false);
      setUploadVideo({...uploadVideo,caption:'',imageURL:'',youtubeLink:''})
    }
    const handleShow = () => setShow(true);

    const handleUpload = async ()=>{
      const {caption,imageURL,youtubeLink} = uploadVideo
      if(caption && imageURL && youtubeLink){
        const result = await uploadVideoAPI(uploadVideo)
            if (result && result.status>= 200 && result.status < 300) {
             alert(`upload ${result.data.caption} upload succesfull`)
             setUploadVideoResponse(result.data)
             handleClose()
            }
           else{
              alert('api call unsuccesfull')
            }
      }else{
        alert('please fill the form completely')
      }
    }


    console.log(uploadVideo);



  return (
    <>
    <div className="d-flex">
        <h5>Upload a Video</h5>
        <button onClick={handleShow} className='btn rounded-4 bg-secondary ms-3 pt-2 btn-sm'><i class="fa-solid fa-plus"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill The Following </p>
            <div className="border rounded border-secondary p-3">
        <FloatingLabel
        controlId="floatingInputCap"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputImg"
        label="Image Url"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputVideo"
        label="Video Link"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Video Link" />
      </FloatingLabel>

      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add