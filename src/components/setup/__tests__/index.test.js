import React from "react";
import {render, screen} from "@testing-library/react";

import Setup from "../";
import { FilesProvider } from "../../../context/FileHandlerContext";
import { NEXT_BUTTON_LABEL, SETUP_HEADING_MAIN, SETUP_HEADING_SUB } from "../Constants";

describe('It renders', () => {

    const WithContext = () => 
        <FilesProvider>
            <Setup />
        </FilesProvider>

    test('setup component card layout', () => {

        render(<WithContext />)
        expect(screen.getByTestId('setup-card')).toBeInTheDocument()
        expect(screen.getByText(SETUP_HEADING_MAIN)).toBeInTheDocument()
        expect(screen.getByText(SETUP_HEADING_SUB)).toBeInTheDocument()
        expect(screen.getByText(NEXT_BUTTON_LABEL)).toBeInTheDocument()
    })
})