import { useParams, useHistory } from "react-router-dom"
import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
  const { id } = useParams() //will out params.id, if route had diffrent would X instead of if 
  const url = 'http://localhost:3000/articles/' + id
  const { data: article, isPending, error} = useFetch(url)
  const history = useHistory()

  //will change error message to homepage direction
  useEffect(() => {
    if (error) {
      //redirect: history.goBack(),  
      setTimeout(() =>
       {history.push('/')
       }, 2000 )
    }
  }, [error, history]) //history not needed but will down a warninng in console 

  return (
    <div>
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
