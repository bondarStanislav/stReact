import PostItem from "./components/PostItem";
import {useState} from "react";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Scala', body: 'So much description'},
        {id: 3, title: 'Ruby', body: 'There is no description'},
    ]);
  return (
    <div className="App">
        <PostList posts={posts} title={"List 1"}/>
        <PostList posts={posts} title={"List 1"}/>
    </div>
  );
}

export default App;
