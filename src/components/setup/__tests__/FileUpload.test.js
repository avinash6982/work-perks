import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { FilesProvider } from "../../../context/FileHandlerContext";
import Fileupload from "../FileUpload";
import { DROPZONE_1, DROPZONE_2, DROPZONE_BUTTON_TITLE } from "../Constants";

describe('It renders', () => {

    const queryClient = new QueryClient()

    const WithContext = (props) => 
        <FilesProvider>
            <QueryClientProvider client={queryClient}>
                <Fileupload {...props} />
            </QueryClientProvider>
        </FilesProvider>

    test('heading elements', () => {

        render(<WithContext />)
        expect(screen.getByText(DROPZONE_1)).toBeInTheDocument()
        expect(screen.getByText(DROPZONE_2)).toBeInTheDocument()
        expect(screen.getByText(DROPZONE_BUTTON_TITLE)).toBeInTheDocument()
    })

    test('dropzone with specified size and style', () => {

        render(<WithContext />)
        expect(screen.getByTestId('dropzone-container')).toBeInTheDocument()
        expect(screen.getByTestId('dropzone-container').style.height).toBe('50vh')
        expect(screen.getByTestId('dropzone')).toBeInTheDocument()
        expect(screen.getByTestId('dropzone').style.border).toBe('5px dotted #ccc')
    })

    test('fileupload icon, input', () => {

        render(<WithContext />)
        expect(screen.getByTestId('file-icon')).toBeInTheDocument()
        expect(screen.getByTestId('file-upload-input')).toBeInTheDocument()
    })

})