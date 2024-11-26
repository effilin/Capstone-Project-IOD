import Link from 'next/link';
import '../styles/not-found.css';

 
export default function NotFoundPage() {
  return (
    <div className='galaxy d-flex flex-row justify-content-around'>
      <div className='animation-background'>
          <div className='text-box d-flex flex-row justify-content-around'>
            <div className='d-flex flex-row'>
              <div className='d-flex flex-row m-2 word1'>
                <span className='not-found-text'>P</span>
                <span className='not-found-text'>A</span>
                <span className='not-found-text'>G</span>
                <span className='not-found-text'>E</span>
              </div>
              <div className='d-flex flex-row m-2 word2'>
                <span className='not-found-text'>N</span>
                <span className='not-found-text'>O</span>
                <span className='not-found-text'>T</span>
              </div>
              <div className='d-flex flex-row m-2 word3'>
                <span className='not-found-text'>F</span>
                <span className='not-found-text'>O</span>
                <span className='not-found-text'>U</span>
                <span className='not-found-text'>N</span>
                <span className='not-found-text'>D</span>
              </div>
            </div>
            <div className='d-flex justify-content-end'>
              <Link className='btn btn-outline-danger home-button' href="/" role='button'>Return Home</Link>
            </div>
          </div>
          
            <div className='l1'></div>
            <div className='l2'></div>
            <div className='l3'></div>
            <div className='l4'></div>
            <div className='l5'></div>
            <div className='l6'></div>
            <div className='l7'></div>
            <div className='l8'></div>
      </div>
    </div>
  )
}