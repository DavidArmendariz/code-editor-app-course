import { BrowserRouter as Router } from 'react-router-dom';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import AuthProvider from 'auth/AuthProvider';
import Routes from 'routes/Routes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CustomThemeProvider>
          <Routes />
        </CustomThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
