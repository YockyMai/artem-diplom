import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {MantineProvider} from "@mantine/core";
import {ModalsProvider} from "@mantine/modals";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <MantineProvider theme={{ colorScheme: 'dark' }}>
            <ModalsProvider>
                <App />
            </ModalsProvider>
        </MantineProvider>
    </Provider>
  </React.StrictMode>,
)
