import Notelist from "./NoteList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: notes,isPending } = useFetch('http://localhost:8000/notes/')
    return (
        <div className="home">
            <div className="home-content">
                { isPending && <div>Loading...</div>}
                { notes && <Notelist notes={notes}/> }
            </div>
        </div>
    );
}
 
export default Home;