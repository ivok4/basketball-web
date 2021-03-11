import { useRouter } from 'next/router'
import Link from 'next/link'
import {Layout, Team as TeamContainer} from '../../../containers'


const Post = (props) => {
  const router = useRouter()
  const { id } = router.query


  return (
    <>
      <h1>Post: {id}</h1>
      <TeamContainer data={id}/>
    </>
  )
}

export default Post

