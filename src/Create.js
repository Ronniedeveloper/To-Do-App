import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Create = () => {
    const {isPending} = useFetch('http://localhost:8000/notes/')
    const [title,setTitle] = useState('');
    const [snippet,setSnippet] = useState('');
    const [body,setBoddy] = useState('');
    const history = useHistory();

    const handlesubmit = (e) => {
        const note = { title,snippet,body }
        e.preventDefault();

        fetch('http://localhost:8000/notes/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        })
        .then(() => {
            console.log('Note added!');
            history.push('/');
        })

    }

    return (
        <div className="create">
            <form onSubmit={handlesubmit}>
                <h1>Add Note</h1>
                <label className="title-inp">Title
                    <input type="text"
                           required
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title..."/>
                </label><br/>
                <label className="snippet-inp">Snippet
                    <input type="text"
                           required
                           value={snippet}
                           onChange={(e) => setSnippet(e.target.value)}
                           placeholder="Enter sinppet..." />
                </label><br/>
                <textarea required
                          value={body}
                          onChange={(e) => setBoddy(e.target.value)}
                          placeholder="Enter body..."
                ></textarea><br/>
                { !isPending && <button className="save">Save</button>}
                { isPending && <button className="save">Saving...</button>}
            </form>
        </div>
    );
}
 
export default Create;