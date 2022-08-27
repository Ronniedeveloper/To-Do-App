import { Link } from "react-router-dom";

const Notelist = ({notes}) => {
    return (
        <div className="note">
            <h1>Note List</h1>
            { notes.map((note) => (
                    <Link to={`/notes/${note.id}`}>
                        <article key={note.id}>
                            <h2>{ note.title }</h2>
                            <p>{ note.snippet }</p>
                        </article>
                    </Link>
                ))}
        </div>
    );
}
 
export default Notelist;