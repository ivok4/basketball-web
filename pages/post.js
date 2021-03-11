import { useRouter } from 'next/router'
import {Layout, Team as TeamContainer} from '../containers'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  //return <p>Post: {pid}</p>
  return (
    
    <Layout>
       <TeamContainer data={props}/>
    </Layout>
   
 )
}

export default Post