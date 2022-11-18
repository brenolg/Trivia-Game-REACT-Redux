import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

const email = 'tryber@test.com';
const name = 'Tryber'; 

describe('Testa a tela de Feedback', () => {
  test('Testa se a tela de Feedback é renderiza na rota correta', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, email);

    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputEmail, email);
  })
})