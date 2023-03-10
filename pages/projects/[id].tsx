import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from 'styles/Projects.module.css'
import { getAllProjectIds, getProjectData } from 'lib/projects'
import { SanitizedHTML } from 'components/SanitizedHTML'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps({ params } : { params:any }) {
  const postData = await getProjectData(params.id);

  return {
    props: {
      postData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData } : { postData:any }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SanitizedHTML className={styles.wrapper} html={postData.content}/>
    </>
  )
}
