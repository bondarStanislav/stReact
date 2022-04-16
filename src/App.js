import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Scala', body: 'So much description'},
        {id: 3, title: 'Ruby', body: 'There is no description'},
    ]);
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''});
    }

  return (
    <div className="App">
        <form>
            {/*Controled Input Управляемый*/}
            <MyInput
                value={post.title}
                onChange={e => setPost( {...post, title: e.target.value})}
                type="text"
                placeholder="Post title"
            />

            {/*useRef forwardRef неУправляемый*/}
            <MyInput
                value={post.body}
                onChange={e => setPost( {...post, body: e.target.value})}
                type="text"
                placeholder="Post description"
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
        <PostList posts={posts} title={"List 1"}/>
    </div>
  );
}

export default App;
