import React, { useState } from 'react';
import Footer from './footer';
import Header from './header';
import Note from './note';
import Input from "../components/input";

function App() {


  const [notes, setNotes] = useState([]);



  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    })
  }


  function pushNewNote(newObj) {
    setNotes((prevValue) => {
      return [...prevValue, newObj];
    });

  }
  return (
    <div className="App">
      <Header />
      <Input pushFunction={pushNewNote} />
      {notes.map(function (note, index) {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            body={note.content}
            deleteFunction={deleteNote} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
