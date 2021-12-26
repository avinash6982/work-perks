import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { FilesProvider } from "../../../context/FileHandlerContext";
import AddImageDialog from "../AddImageDialog";

import { CANCEL_BUTTON_LABEL, SELECT_BUTTON_LABEL, SELECT_IMAGE_TITLE } from "../Constants";

describe('It renders', () => {

    const queryClient = new QueryClient()

    const WithContext = (props) => 
        <FilesProvider>
            <QueryClientProvider client={queryClient}>
                <AddImageDialog {...props} />
            </QueryClientProvider>
        </FilesProvider>

    test('basic layouts and labels', () => {

        render(<WithContext />)
        expect(screen.getByText(CANCEL_BUTTON_LABEL)).toBeInTheDocument()
        expect(screen.getByText(SELECT_BUTTON_LABEL)).toBeInTheDocument()
        expect(screen.getByText(SELECT_IMAGE_TITLE)).toBeInTheDocument()
    })

    test('close button', () => {

        render(<WithContext />)
        expect(screen.getByTestId('close-button')).toBeInTheDocument()
    })

    test('handleClose on clicking closebutton', () => {

        const handleClose = jest.fn()
        render(<WithContext handleClose={handleClose} />)
        fireEvent.click(screen.getByTestId('close-button'))
        expect(handleClose).toBeCalled()
    })

    test('handleClose on clicking cancelbutton', () => {

        const handleClose = jest.fn()
        render(<WithContext handleClose={handleClose} />)
        fireEvent.click(screen.getByTestId('cancel-button'))
        expect(handleClose).toBeCalled()
    })

    test('onSubmit on clicking closebutton', () => {

        const mockFunction = jest.fn()
        render(<WithContext handleClose={mockFunction} onSubmit={mockFunction} />)
        fireEvent.click(screen.getByTestId('submit-button'))
        expect(mockFunction).toBeCalled()
    })

})