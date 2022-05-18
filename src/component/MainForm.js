import { useState } from 'react';
import classes from './MainForm.module.css'

const MainForm = () => {

    const [enteredList, setEnteredList] = useState('');
      
    const listChangeHandler = (event) => {
      setEnteredList(event.target.value);
      console.log(enteredList);
    }

    const mainSubmitHandler = (event) => {
      event.preventDefault();
      console.log(enteredList)
    }
    

   return <form className={classes.main} onSubmit={mainSubmitHandler}>
       <input className={classes.input} type="text" placeholder="typing Todolist!!" onChange={listChangeHandler} />
       <button className={classes.btn}>Click!!</button>
   </form>
}

export default MainForm;