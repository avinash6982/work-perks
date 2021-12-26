import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";

import ImageGridItem from "../ImageGridItem"

import '@testing-library/jest-dom'
describe("ImageGrideItem renders", () => {

    test("the button element", () => {

        render(<ImageGridItem />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test("small button unless specified", () => {

        render(<ImageGridItem />)
        expect(screen.getByRole('button').style.height).toBe('5rem')
        expect(screen.getByRole('button').style.width).toBe('5rem')
    })

    test("large button when specified", () => {

        render(<ImageGridItem large />)
        expect(screen.getByRole('button').style.height).toBe('15rem')
        expect(screen.getByRole('button').style.width).toBe('15rem')
    })

    test("not to render button when loading is true", () => {

        render(<ImageGridItem loading />)
        expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    })

    test("skeleton with small size", () => {

        render(<ImageGridItem loading />)
        expect(screen.getByTestId('skeleton').style.width).toBe('5rem')
        expect(screen.getByTestId('skeleton').style.height).toBe('5rem')
    })
})

describe("ImageGridItem contains onClick methods", () => {

    test("for normal item", () => {

        let onClick = jest.fn()
        render(<ImageGridItem onClick={onClick} />)
        fireEvent.click(screen.getByRole('button'))
        expect(onClick).toBeCalled()
    })

    test("for Large item", () => {

        let onClick = jest.fn()
        render(<ImageGridItem onClick={onClick} large />)
        fireEvent.click(screen.getByRole('button'))
        expect(onClick).toBeCalled()
    })
})
