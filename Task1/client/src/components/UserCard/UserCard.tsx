import { Component, createSignal, JSXElement } from 'solid-js';
import styles from './UserCard.module.scss';
import { IUserCard } from '../../types/components.interfaces';
import { FiMail, FiSmartphone } from 'solid-icons/fi';
import Modal from '../Modal';
import UserDetails from '../UserDetails';

const DetailsField = (props: { icon: JSXElement, text: string }) => {
    const { icon, text } = props;

    return (
        <div class={styles.details_field}>
            {icon}
            <span>{text}</span>
        </div>
    )
}

const UserCard: Component<IUserCard> = (props) => {
    const [isModalOpen, setIsModalOpen] = createSignal<boolean>(false);
    const { user } = props;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div class={styles.container}>
            { isModalOpen() 
                ? <Modal 
                    closeModal={closeModal}
                    child={<UserDetails user={user} closeModal={closeModal} />} /> 
                : null }
            <h2 class={styles.info_name} onClick={openModal}>{user.name}</h2>
            <div class={styles.info_details}>
                <DetailsField icon={<FiSmartphone />} text={user.phone} />
                <DetailsField icon={<FiMail />} text={user.email} />
            </div>
        </div>
    );
};

export default UserCard;