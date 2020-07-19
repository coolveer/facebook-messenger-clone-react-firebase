import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import * as firebase from "firebase/app";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setinput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestemp", "desc")
      .onSnapshot((spanshot) => {
        setMessages(spanshot.docs.map((doc) => ({id: doc.id,msg:doc.data()})));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("please enter your name!"));
  }, []);

  console.log(messages);
  const sendMessages = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestemp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=80&h=80" alt="facebook-messenger-icon"/>
      <h2>Facebook Messenger Clone</h2>
      <h3>welcome {username} lets chat !</h3>
      <form className="app__form" >
        <FormControl className="app__formcontrol">
          <Input
          className="app__input"
            type="text"
            placeholder="Enter your message "
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />

          <IconButton 
            className="app__iconBtn"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessages}
          >
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id,msg}) => (
          <Message key={id} username={username} text={msg} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
