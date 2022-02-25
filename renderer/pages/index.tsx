import { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Layout from '../components/Layout'


const DynamicLordIcon = dynamic(() => import('../components/icons/LordIcons'), {
  ssr: false
});

const IndexPage = () => {
  const [files, setFiles] = useState<String[]>([]);
  
  useEffect(() => {
    setFiles(window.files.getFiles());
  }, [])



  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
    <DynamicLordIcon/>
      <h1 className='italic'>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        {files.map(file => (
          <p>{file}</p>
        ))}
      </p>
    </Layout>
  )
}

export default IndexPage
