import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List/List';
import Details from './components/Details/Details';


function App() {
  const [state, setState] = useState({
    idForDetails: '',
    isLoading: false,
    info: null,
    list: []
  });
  useEffect(() => {
    getInfoFromServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.idForDetails]);

  async function getInfoFromServer() {
    const endpoint = state.idForDetails === '' ? 'users' : state.idForDetails;
    const request = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${endpoint}.json`)
      .then(response => response.json());
    const data = await request;
    if (Array.isArray(data)) {
      setState(prevState => ({ ...prevState, list: [...data] }));
    } else {
      setState(prevState => ({
        ...prevState,
        info: { ...data },
        isLoading: false,
      }));
    }
  }

  function handlerClickOnName(e, id) {
    e.preventDefault();
    if (id === state.idForDetails) return;
    setState(prevState => ({
      ...prevState,
      idForDetails: id,
      isLoading: true,
    }));
  }

  return (
    <div className='wrapper'>
      <List list={state.list} handlerClickOnName={handlerClickOnName} idForDetails={state.idForDetails} />
      {!state.info && state.isLoading && <span>Загружаем профиль...</span>}
      {state.info && <Details info={state.info} isLoading={state.isLoading} />}
    </div>
  );
}

export default App;
