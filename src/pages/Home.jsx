import React, { useState } from 'react'
import Add from '../assets/components/Add'
import { Link } from 'react-router-dom'
import View from '../assets/components/View'
import Category from '../assets/components/Category'


function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse]=useState("")
  const [uploadVideoResponse,setUploadVideoResponse]=useState("")
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoResponse={setUploadVideoResponse} />
      <Link style={{textDecoration:'none'}} to={'/watch'}>View HIstory</Link>
    </div>
    <div className="container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View uploadVideoResponse={uploadVideoResponse}
        setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
      </div>
      <div className="col-lg-6">
          <Category/>
        
      </div>
    </div>
    </>
  )
}

export default Home