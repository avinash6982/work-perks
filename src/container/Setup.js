import { QueryClient, QueryClientProvider } from "react-query";

import SetupComponent from "../components/setup";
import { FilesProvider } from "../context/FileHandlerContext";

//Queryclient creates a queryclient instance
//QueryClientProvider gives child components
//access to async api calls and cached data

//FilesProvider manages image uploads(not using local storage)
const queryClient = new QueryClient();

const Setup = () => (
  <QueryClientProvider client={queryClient}>
    <FilesProvider>
      <SetupComponent />
    </FilesProvider>
  </QueryClientProvider>
);

export default Setup;
