import React, { useState, useContext } from 'react';
import { data } from '../../../data';
import { v4 as uuid } from "uuid";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  const addPerson = () => {
    const name = 'Lasse'
    const newPerson = { id: uuid(), title: name };
    if(people.find((person) => person.name === name)){
      return
    } else{
      setPeople([...people, newPerson])
    }
  };

  return (
    <PersonContext.Provider value={{ removePerson, addPerson, people }}>
      <h3>prop drilling -> Context API / useContext</h3>
      <List />
    </PersonContext.Provider >
  );
};

const List = () => {
  const mainData = useContext(PersonContext)
  console.log(mainData)
  return (
    <div>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)
  // const { addPerson } = useContext(PersonContext)
  return (
    <main>
      <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
        {/* <button onClick={() => addPerson()}>add</button> */}
      </div>
    </main>

  );
};

export default ContextAPI;
