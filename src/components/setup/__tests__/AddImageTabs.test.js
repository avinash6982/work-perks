import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { FilesProvider } from "../../../context/FileHandlerContext";
import AddImageTabs from "../AddImageTabs";

describe('It renders', () => {

    const queryClient = new QueryClient()

    const WithContext = (props) => 
        <FilesProvider>
            <QueryClientProvider client={queryClient}>
                <AddImageTabs {...props} />
            </QueryClientProvider>
        </FilesProvider>

    test('2 tabs', () => {

        render(<WithContext />)
        expect(screen.getAllByTestId('tab-item')).toHaveLength(2)
    })

    test('gallery and upload', () => {

        render(<WithContext />)
        expect(screen.getByLabelText("Upload")).toBeInTheDocument()
        expect(screen.getByLabelText("Gallery")).toBeInTheDocument()
    })

})