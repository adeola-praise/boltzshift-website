import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
   <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#FAD007",
              fontFamily: "DM Sans, sans-serif",
            },
          }}
        >
          <App />
        </ConfigProvider>
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  </BrowserRouter>
  </StrictMode>,
)