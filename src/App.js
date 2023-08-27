import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>

      hello
      {/* <Routes>
        <Route path="home" element={<Home /> } />
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Cstomers />} />

        </Route>
      </Routes> */} */}
    </BrowserRouter>
  );
};

export default App;
