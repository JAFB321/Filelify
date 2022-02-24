import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  const [files, setFiles] = useState<String[]>([]);
  
  useEffect(() => {
    setFiles(window.files.getFiles());
  }, [])



  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
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
