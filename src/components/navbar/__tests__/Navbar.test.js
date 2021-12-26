import React from "react";
import {render, screen} from "@testing-library/react";

import Navbar from "..";

describe('Navbar renders', () => {

    test('all menu items', () => {

        render(<Navbar />)
        expect(screen.getByText('Messages')).toBeInTheDocument()
        expect(screen.getByText('Notifications')).toBeInTheDocument()
        expect(screen.getAllByText('Profile')).toHaveLength(2)
        expect(screen.getAllByText('My account')).toHaveLength(2)
        expect(screen.getAllByText('Signout')).toHaveLength(2)
    })

    test('mobile menu', () => {

        render(<Navbar />)
        expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    })

    test('desktop menu', () => {

        render(<Navbar />)
        expect(screen.getByTestId('desktop-menu')).toBeInTheDocument()
    })

    test('main icon', () => {

        render(<Navbar />)
        expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    test('menu items', () => {

        render(<Navbar />)
        expect(screen.getAllByTestId('menu-items')).toHaveLength(3)
    })

    test('mobile menu items', () => {

        render(<Navbar />)
        expect(screen.getAllByTestId('mobile-menu-items')).toHaveLength(5)
    })
})