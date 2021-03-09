import { useRouter } from 'next/router'
import Link from 'next/link'
import {Layout, Team as TeamContainer} from '../../../containers'


const Post = (props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Post: {id}</h1>
      <TeamContainer data={props}/>
    </>
  )
}
export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getCollectionBySlug(slug,'personajes',res)
    return { props: data }
}


export default Post