import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Criando testes para Página de Login', () => {
  test('Testando se a tela inical é renderizada', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('input-gravatar-email');
    expect(email).toBeInTheDocument();

    const name = screen.getByTestId('input-player-name');
    expect(name).toBeInTheDocument();

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();

    const btnEntrar = screen.getByRole('button');
    expect(btnEntrar).toHaveTextContent('Play');
    expect(btnEntrar).toBeDisabled();
  });

  test('Se a rota é renderizada corretamente no caminho /play', async () => {
    const { history } = renderWithRouterAndRedux (<App />, { initialEntries: ['/'] },
    );

    const testeEmail = 'test@test.com'
    const testeName = 'teste'
    const email = screen.getByTestId('input-gravatar-email');
    const name = screen.getByTestId('input-player-name');
    const btnEntrar = screen.getByTestId('btn-play');

    userEvent.type(email, testeEmail);
    userEvent.type(name, testeName);
    expect(btnEntrar).toBeEnabled();

    userEvent.click(btnEntrar);
    await waitForElementToBeRemoved(() => screen.getByTestId('btn-play'));
    // expect(history.location.pathname).toBe('/play');


    const { pathname } = history.location;
    expect(pathname).toBe('/play');
  });  
});