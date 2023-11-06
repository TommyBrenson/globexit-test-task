import { Component, JSXElement } from "solid-js";
import { User } from "./data.types";

export interface ISearchInput {
    handleSearch: (query: string) => void,
    isFetching: boolean,
};

export interface IUserCard {
    user: User,
};

export interface ICardsWrapper<T> {
    data: T[],
};

export interface IModal {
    child: JSXElement,
    closeModal: () => void,
};

export interface IUserDetails {
    user: User,
    closeModal?: () => void;
};

export interface IPopupInfo extends IUserCard {};