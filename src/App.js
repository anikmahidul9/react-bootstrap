import "./App.css";
import Card from "./Components/Card/Card";
import CardGroup from "./Components/Cardgroup/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Cardgroup2 from "./Components/Cardgroup2/Cardgroup2";
import MyLineChart from "./Components/Mylinechart/MyLineChart";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import Friends from "./Components/Friends/Friends";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import ShowFriend from "./Components/ShowFriend/ShowFriend";
import Post from "./Components/Post/Post";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      {/*  <MyLineChart></MyLineChart> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Friends" element={<Friends></Friends>}></Route>
        <Route path="/post" element={<Post></Post>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/friend/:detail" element={<ShowFriend></ShowFriend>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
