// import { useEffect, useState } from "react"
// import request from "../../../utils/request.js"


export default function DetailsComments({
    comments
}) {
    // const [comments, setComments] = useState([])


    //Ние си измисляме как да се казва (authors)
    // useEffect(() => {
    //     request('/comments')
    //         .then(result => {
    //             const gameComments = Object.values(result).filter(comment => comment.gameId === gameId)
    //             setComments(gameComments)
    //         })
    // },[gameId,refresh])

    // RELATIONS

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.map(comment => (
                    <li style={comment.pending ? {color: 'gray'} : {}}key={comment._id} className="comment">
                        <p>
                            {comment.author?.email}: {comment.message}
                        </p>
                    </li>
                ))}
            </ul>
            {comments.length === 0 && (
                <p class="no-comment">No comments.</p>
            )}
        </div>

    )
}