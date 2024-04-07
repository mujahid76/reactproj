import "./App.css";
import SignIn from "./Layout/SignIn/SignIn";
import OtpPage from "./Layout/Otp/Otp";
import CreateOrJoinOrganisation from "./Layout/Organization/Create-Join";
import OrgForm from "./Layout/Organization/OrgForm";
import OrgForm2 from "./Layout/Organization/OrgForm2";
import ProtectedRoute from "./Layout/ProtectedRoute/ProtectedRoute";
import BookList from "./Layout/Books/BookList";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Container>
        <div className="App">
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
              <Route
                path="/org"
                element={
                  <ProtectedRoute>
                    <OrgForm2 />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/books"
                element={
                  <ProtectedRoute>
                    <BookList />
                  </ProtectedRoute>
                }
              />

                <Route path="/" element={<SignIn />} />
                <Route path="/otp" element={<OtpPage/>} />
                <Route path="/createOrg" element={<CreateOrJoinOrganisation />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
        </div>
      </Container>
    );
}

export default App;
