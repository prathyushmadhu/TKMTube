import React, { useState } from 'react';
import {
//   MDBContainer,
  MDBCol,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
} from 'mdb-react-ui-kit';

export default function App() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <>
      <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
            <img src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp' className='w-100' />
            <a style={{ cursor: 'pointer' }} onClick={() => setModal1(true)}>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
            </a>
          </div>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
          <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
            <img src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp' className='w-100' />
            <a style={{ cursor: 'pointer' }} onClick={() => setModal2(true)}>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
            </a>
          </div>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
  <div className='bg-image hover-overlay ripple shadow-1-strong rounded'>
    <img src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp' className='w-100' alt='Video 1' />
    <a href="#!" style={{ cursor: 'pointer' }} onClick={() => setModal1(true)}>
      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
    </a>
  </div>
</MDBCol>

      </MDBRow>

      <MDBModal show={modal1} setShow={setModal1}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/A3PDXmYoF5U'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal1(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={modal2} setShow={setModal2}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/wTcNtgA6gHs'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal2(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={modal3} setShow={setModal3}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/vlDzYIIOYmM'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal3(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}