import React from 'react';
import Title from './Title.js';
import InputField from './InputField.js';
import AddButton from './AddButton';
import ChangeButton from './ChangeButton';
import DeleteButton from './DeleteButton';
import List from './List';



export default () => {
  return (
    <React.Fragment>
      <Title />
      <InputField />
      <AddButton />
      <ChangeButton />
      <DeleteButton />
      <List />
   </React.Fragment>
  );
}

