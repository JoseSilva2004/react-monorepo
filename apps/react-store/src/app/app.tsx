// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import axios from 'axios';

import NxWelcome from './nx-welcome';
import Card from './components/Card';
import UserForm from './components/UserForm';

// Componente principal
const App = () => {
  return (
    <div>
        <main>
            <Card body={"Hola Mundo"}></Card>
            <br />
            <br />
            <UserForm></UserForm>
        </main>
    </div>
  );
};

export default App;
