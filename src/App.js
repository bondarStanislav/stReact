import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Scala', body: 'So much description'},
        {id: 3, title: 'Ruby', body: 'There is no description'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <select>
                <option value="">By ID</option>
                <option value="">Dy description</option>
            </select>
        </div>
        {posts.length !== 0
            ? <PostList posts={posts} title={"List 1"} remove={removePost}/>
            : <h1 style={{textAlign:"center"}}>No posts yet</h1>
        }
    </div>
  );
}

export default App;
