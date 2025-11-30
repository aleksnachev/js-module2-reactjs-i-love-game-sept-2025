import { useState } from "react"
import request from "../../../utils/request.js"
import { useParams } from "react-router"

export default function CreateComment({
    user,
    onCreate
}) {
    const {gameId} = useParams()
    const [comment,setComment] = useState('')
    const changeHandler = (e) => {
        setComment(e.target.value)
    }

    const submitHandler = async () => {
        try{
            await request('/comments', 'POST', {
                author: user.email,
                message: comment,
                gameId
            })  
            setComment('')
            onCreate()
        }catch(err){
            alert(err.message)
        }
    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea 
                name="comment" 
                placeholder="Comment......"
                onChange={changeHandler}
                value={comment}
                defaultValue={""}
                />
                <input className="btn submit" type="submit" defaultValue="Add Comment" disabled={!user}/>
            </form>
        </article>
    )
}