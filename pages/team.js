import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Layout, Team as TeamContainer} from '../containers'

export default function Team(props) {
  console.log(props);
  return (
    
     <Layout>
        <TeamContainer data={props}/>
     </Layout>
    
  )
}
