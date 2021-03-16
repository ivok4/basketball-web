import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Layout, About as AboutContainer} from '../containers'

export default function About() {
  return (
    
     <Layout>
      <AboutContainer />
     </Layout>
    
  )
}
