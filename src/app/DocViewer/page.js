// 'use client';

// import { useSearchParams } from 'next/navigation';
// import { useEffect, useState, Suspense } from 'react';
// import AdminAuth from '@/components/AdminAuth';
// import { DocumentViewer } from 'react-documents';

// export default function DocViewer() {
//     const searchParams = useSearchParams();
//     const [uri, setUri] = useState('');

//     useEffect(() => {
//         const fetchResumeData = async () => {
//             const userID = searchParams.get('id');
//             if (userID) {
//                 try {
//                     const response = await fetch(`http://localhost:5001/api/resume/${userID}`);
//                     const resumeDetail = await response.json();
//                     const uriResume = resumeDetail?.data.secure_url ?? '';
//                     setUri(uriResume);
//                 } catch (error) {
//                     console.error("Error fetching resume:", error);
//                 }
//             }
//         };

//         fetchResumeData();
//     }, [searchParams]);

//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <div className="App">
//                 <AdminAuth>
//                     <DocumentViewer
//                         style={{ height: '100vh', width: '100%' }}
//                         queryParams="hl=EN"
//                         url={uri}
//                         overrideLocalhost=''
//                     />
//                 </AdminAuth>
//             </div>
//         </Suspense>
//     );
// }
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
