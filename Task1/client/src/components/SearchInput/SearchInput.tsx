
import styles from './SearchInput.module.scss';
import { BsSearch } from 'solid-icons/bs';
import { Component, createSignal, JSX } from 'solid-js';
import { ISearchInput } from '../../types/components.interfaces';

const SearchInput: Component<ISearchInput> = (props) => {
    const [searchQuery, setSearchQuery] = createSignal<string>('');
    const { handleSearch, isFetching } = props;

    const onSearch: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
        event.preventDefault();
        setSearchQuery(event.currentTarget.value);
        handleSearch(searchQuery());
    };

    return (
        <form class={styles.container}>
            <input 
                class={styles.input} 
                value={searchQuery()}
                type="text" 
                placeholder='' 
                onChange={onSearch}
                disabled={isFetching} />
            <button 
                type='submit' 
                class={styles.search_button} 
                disabled={isFetching}>
                <BsSearch class={styles.search_icon} />
            </button>
        </form>
    );
};

export default SearchInput;