import { useNavigate } from "react-router"
import useForm from "../../hooks/useForm.js"
import useRequest from "../../hooks/useRequest.js"

export default function GameCreate() {
    const navigate = useNavigate()
    const {request} = useRequest()
    const createGameHandler = async (values) => {
        const  data = values

        data.players = Number(data.players)
        // const response = await fetch('http://localhost:3030/jsonstore/games', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'apllication/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // const result = await response.json()
        // console.log(result);
        try{
            await request('/data/games', 'POST' , data)
            navigate('/games')
        }catch(err){
            alert(err.message)
        }
    }

    const {register, formAction} = useForm(createGameHandler, {
        genre: '',
        players: '', 
        date: '',
        imageUrl: '',
        summary: ''
    })

    return (
        <>
            {/* add Page ( Only for logged-in users ) */}
            <section id="add-page">
                <form id="add-new-game" action={formAction}>
                    <div className="container">
                        <h1>Add New Game</h1>
                        <div className="form-group-half">
                            <label htmlFor="gameName">Game Name:</label>
                            <input
                                type="text"
                                id="gameName"
                                {...register('title')}
                                placeholder="Enter game title..."
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                id="genre"
                                {...register('genre')}
                                placeholder="Enter game genre..."
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="activePlayers">Active Players:</label>
                            <input
                                type="number"
                                id="activePlayers"
                                {...register('players')}
                                min={0}
                                placeholder={0}
                            />
                        </div>
                        <div className="form-group-half">
                            <label htmlFor="releaseDate">Release Date:</label>
                            <input type="date" id="releaseDate" {...register('date')} />
                        </div>
                        <div className="form-group-full">
                            <label htmlFor="image">Image Url</label>
                            <input
                                type="text"
                                id="image"
                                {...register('imageUrl')}
                                placeholder="Enter image URL..."
                            />
                            


                        </div>
                        <div className="form-group-full">
                            <label htmlFor="summary">Summary:</label>
                            <textarea
                                {...register('summary')}
                                id="summary"
                                rows={5}
                                placeholder="Write a brief summary..."
                                defaultValue={""}
                            />
                        </div>
                        <input className="btn submit" type="submit" defaultValue="ADD GAME" />
                    </div>
                </form>
            </section>
        </>

    )
}