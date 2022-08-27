import useFetch from "./useFetch";
import { useHistory, useParams } from 'react-router-dom'

const NoteDetail = () => {
    const { id } = useParams();
    const { data: note,isPending } = useFetch('http://localhost:8000/notes/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/notes/' + note.id, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('Deleted');
            history.push('/')

        })
    }

    return (
        <div className="note-details">
            { isPending && <div>Loading...</div>}
            { note && (<article>
                        <h1>{note.title}</h1>
                        <p className="snippet">{ note.snippet }</p>
                        <p className="body2">{ note.body }</p>
                        <button onClick={handleClick}>Delete</button>
                      </article>
            )}
        </div>
    );
}
 
export default NoteDetail;