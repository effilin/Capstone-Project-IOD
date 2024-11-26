import Link from 'next/link';
import '../../../styles/not-found.css';

 
export default function NotFoundPage() {
  return (
    <div className='galaxy'>
      <h2>Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}