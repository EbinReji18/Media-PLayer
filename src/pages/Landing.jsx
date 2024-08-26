import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className="container-fluid mb-5 d-flex align-item-center" style={{height:'80vh'}}>
        <Row>
          <Col className="p-5" sm={12} md={6}>
            <h2>
            <i class="fa-brands fa-youtube fa-beat" style={{color: "#B197FC"}}></i>{' '}
            Media Player 2024
            </h2>
            <p style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repellendus, obcaecati reiciendis minus modi sunt voluptatum. Delectus, accusantium quasi quia placeat enim pariatur, esse sint sit itaque sapiente officiis quisquam.</p>
            <div className="d-grid">
              <Link to={'/home'} className="btn btn-success">Let's go</Link>
            </div>
          </Col>

          <Col className="py-4" sm={12} md={6}>
              <img style={{height:"400px"}} src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JtNjExYmF0Y2gyLXJlbWl4LWgtMDAxYS5wbmc.png" alt="loading" className='img-fluid rounded' />
          </Col>
        </Row>
  
      </div>

      <div className="container-fluid mt-5">
        <div className="my-3 text-center">Featuers</div>
        <div className="p-4 d-flex justify-content-around">

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2023/03/24/18/16/18-16-28-807_512.gif" />
      <Card.Body>
        <Card.Title>Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media0.giphy.com/media/NniDzqDyg8BJaOxMBG/200w.gif?cid=6c09b952ibah5c5vnu6qtow5trgjlvz0amiybwhvvrwkpznb&ep=v1_gifs_search&rid=200w.gif&ct=g" />
      <Card.Body>
        <Card.Title>Add Categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media2.giphy.com/media/9V71czzFLwBNE0O8EV/200w.gif?cid=6c09b952cjr4te4jofzgkad1ogteitvedhha1wquj9pzhnqc&ep=v1_gifs_search&rid=200w.gif&ct=g" />
      <Card.Body>
        <Card.Title>History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


        </div>
      </div>

      <div className="p-5">
        <Row>
          <Col sm={12} md={7}>
            <h4>Simpler and Faster</h4>
            <p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, quas doloribus? Atque, perspiciatis tempore! Culpa, quaerat quo.</p>  
          </Col>

          <Col sm={12} md={5}>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/SqcY0GlETPk?si=x-1rmK8dtJvBCsiG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing