import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { FilesProvider } from "../../../context/FileHandlerContext";
import ImageGrid from "../ImageGrid";
import { IMAGE_GRID_TITLE } from "../Constants";

describe('It renders', () => {

    const queryClient = new QueryClient()

    const WithContext = (props) => 
        <FilesProvider>
            <QueryClientProvider client={queryClient}>
                <ImageGrid {...props} />
            </QueryClientProvider>
        </FilesProvider>

    test('image grid heading', () => {

        render(<WithContext />)
        expect(screen.getByText(IMAGE_GRID_TITLE)).toBeInTheDocument()
    })
    test('image grid container', () => {

        render(<WithContext />)
        expect(screen.getByTestId('image-grid')).toBeInTheDocument()
    })
})