import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { FilesProvider } from "../../../context/FileHandlerContext";
import Gallery from "../Gallery";

describe('It renders', () => {

    const queryClient = new QueryClient()

    const WithContext = (props) => 
        <FilesProvider>
            <QueryClientProvider client={queryClient}>
                <Gallery {...props} />
            </QueryClientProvider>
        </FilesProvider>

    test('gallery container', () => {

        render(<WithContext />)
        expect(screen.getByTestId('gallery-container')).toBeInTheDocument()
    })

    test('when fetchitems status is loading, then skeleton', () => {

        render(<WithContext fetchItems={{status: "loading"}} />)
        expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    })
})