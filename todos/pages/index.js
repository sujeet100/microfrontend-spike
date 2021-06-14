import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Todos from '../components/todos.js'
import Layout from '../components/layout.js';

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>My Todos</title>
        </Head>
          <Todos/>
      </Layout>
  )
}
