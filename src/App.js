import  './App.css';
import {useState,useEffect} from 'react';
import LogIn from './components/from-controls/login/login';
import SignOut from './components/from-controls/signOut/signOut';
import AdminPage from './layouts/adminpage';

function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState=()=>{
    const data= localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data):null
    setUser(us)
  }
  useEffect(() => {
    
    userState()
  }, [])
  return (
    <>
     {user !==null ? (
       <>
        <AdminPage setUserState={()=>setUser(null)}></AdminPage> 
       </>
     ):(
       <>
       {toggleForm ? (<LogIn loggedIn={(user)=> setUser(user)} toggle={() => formMode()}/>) 
          : ( <SignOut toggle={() => formMode()}/>)}
       </>
     )}
    </>
      
  );
}

export default App;
