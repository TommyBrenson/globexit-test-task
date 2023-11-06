import { createSignal, createEffect } from 'solid-js';
import { fetchUsers } from '../api/user';
import CardsWrapper from '../layouts/CardsWrapper';
import { User } from '../types/data.types';
import styles from './App.module.scss';
import SearchInput from './SearchInput';
import Spinner from './Spinner';

function App() {

  const [data, setData] = createSignal<User[]>([]);
  const [isLoading, setIsLoading] = createSignal<boolean>(true);

  const searchByQuery = (query: string) => {
    setIsLoading(true);
    fetchUsers(query)
      .then((data) => {
        setData(data);
        console.log(data);
        setIsLoading(false);
      });
  };

  createEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
      <div class={styles.wrapper}>
        { isLoading() 
          ? <Spinner />
          : <>
              <SearchInput handleSearch={searchByQuery} isFetching={isLoading()} />
              <CardsWrapper data={data()} />
            </> }
      </div>
  )
}

export default App
