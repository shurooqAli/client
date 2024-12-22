import Login from '../Login';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from "../../store";
import reducer from '../../Features/UserSlice';
 
test("Match the UI", () => {
    const { asFragment } = render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});
 
const testInitValue = {
    user: {},
    message: "",
    isLoading: false,
    isSuccess: false,
    isError: false
};
 
test("Checking the State", () => {
    const initialState = reducer(undefined, { type: undefined });
    expect(initialState).toEqual(testInitValue);
});
 