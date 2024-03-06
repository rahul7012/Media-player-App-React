import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
Card

function LandingPage() {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate("/home")
  }
  return (
    <>
    <div className='container mt-5'>

      <div className="header row text-align-center align-items-center">
        <div className="col-lg-5 ">
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App. will allow you to add and remove their uploaded videos , also helpsto arrange them in a different categories by providing drag drop functionalities.</p>
          <button onClick={handleNavigate} className='btn btn-info mt-2'>Get Started</button>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
           <img  src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing Page"/>
        </div>

      </div>

      <div className="feature mt-5 mb-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{height:'500px'}} >
            <Card.Img style={{height:'70%'}} variant="top" src="https://i.pinimg.com/originals/93/a4/39/93a439f02fed8676fb281e461bbde801.gif" />
            <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
            User can upload , view and remove videos.
            </Card.Text>
            </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{height:'500px'}} >
            <Card.Img style={{height:'70%'}} variant="top" src="https://i.pinimg.com/originals/13/f2/a9/13f2a9032b0d9c76da2c27af64d3809b.gif" />
            <Card.Body>
            <Card.Title>Categorize Videos</Card.Title>
            <Card.Text>
            User can categorize videos according to their preference using drag and drop.
            </Card.Text>
            </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{height:'500px'}} >
            <Card.Img style={{height:'70%'}} variant="top" src="https://th.bing.com/th/id/R.b32f76a1bf943ff843c8e013f84590dd?rik=pCBce9CnGkYUPw&riu=http%3a%2f%2f24.media.tumblr.com%2f15459b691a8f3dba9cb36dd267be29ee%2ftumblr_n1hkvdRrrN1rxpffao1_1280.gif&ehk=C%2bpu4KN6Y76gG%2f7keL1x3yItkSsiIJxU3887FpUvEpg%3d&risl=&pid=ImgRaw&r=0" />
            <Card.Body>
            <Card.Title>Watch History</Card.Title>
            <Card.Text>
            Users are able to see the history of watched videos.
            </Card.Text>
            </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      
      <div className=" row video border p-5 mt-5 rounded mb-5 align-items-center">
        <div className="col-lg-5 mt-2">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. architecto pariatur nisi, atque incidunt quas dicta totam voluptates. Debitis veritatis fuga ullam quasi.</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Categorize Videos:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores minus numquam.</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores minus numquam.</p>

        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qqrpMRDuPfc?si=GWDqVNfVyBsyHhll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </div>
    <hr />
    </>
  )
}

export default LandingPage