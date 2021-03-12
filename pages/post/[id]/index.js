import { useRouter } from 'next/router'
import Link from 'next/link'
import {Layout, Team as TeamContainer} from '../../../containers'


const Post = () => {
  const router = useRouter()
  const { id } = router.query


  return (
  <Layout>
      <TeamContainer data={id}/>
   </Layout>
  )
}

export default Post

