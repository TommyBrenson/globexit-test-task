import { Component } from 'solid-js';
import { IUserDetails } from '../../types/components.interfaces';
import { FiX } from 'solid-icons/fi'
import styles from './UserDetails.module.scss';

const DetailsField = (props: { label: string, text: string }) => {
    const { label, text } = props;

    return (
        <div class={styles.details_field}>
            <span class={styles.details_label}>{label}:</span>
            <span class={styles.details_text}>{text}</span>
        </div>
    );
};

const UserDetails: Component<IUserDetails> = (props) => {
    const { user, closeModal } = props;
    const fillerText = 'Разработчики используют текст в качестве заполнителя макта страницы. ' +
                        'Разработчики используют текст в качестве заполнителя макта страницы.'

    return (
        <div class={styles.container} onClick={(event) => {event.stopPropagation()}}>
            <div class={styles.header}>
                <h3 class={styles.user_name}>{user.name}</h3>
                <FiX class={styles.close_icon} onClick={closeModal} />
            </div>
            <div class={styles.info_wrapper}>
                <DetailsField label='Телефон' text={user.phone} />
                <DetailsField label='Почта' text={user.email} />
                <DetailsField label='Дата приема' text={user.hire_date} />
                <DetailsField label='Должность' text={user.position_name} />
                <DetailsField label='Подразделение' text={user.department} />
            </div>
            <div class={styles.extra_info}>
                <DetailsField label='Дополнительная информация' text={fillerText} />
            </div>
        </div>
    );
};

export default UserDetails;