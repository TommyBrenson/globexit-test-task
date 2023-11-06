import { Component, For } from 'solid-js';
import UserCard from '../../components/UserCard';
import { ICardsWrapper } from '../../types/components.interfaces';
import { User } from '../../types/data.types';
import styles from './CardsWrapper.module.scss';

const UsersNotFound: Component = () => {
    return (
        <div>
            Oops... There are no users for this query...
        </div>
    );
}

const CardsWrapper = (props: ICardsWrapper<User>) => {
    return (
        <div class={styles.container}>
            <For each={props.data} fallback={<UsersNotFound />}>
                {(item: User) => <UserCard user={item} />}
            </For>
        </div>
    );
};

export default CardsWrapper;