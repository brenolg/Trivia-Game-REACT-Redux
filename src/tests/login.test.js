import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Criando testes para Página de Login', () => {
  const testeEmail = 'test@test.com'
  const testeName = 'teste'
 
  test('Testando se a tela inical é renderizada', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('input-gravatar-email');
    expect(email).toBeInTheDocument();

    const name = screen.getByTestId('input-player-name');
    expect(name).toBeInTheDocument();

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();

    const btnEntrar = screen.getByTestId("btn-play");
    expect(btnEntrar).toHaveTextContent('Play');
    expect(btnEntrar).toBeDisabled();

    const btnSettings = screen.getByTestId("btn-settings");
    expect(btnSettings).toBeInTheDocument();
    
  });

  test('Se a rota é renderizada corretamente no caminho /play', async () => {
    const { history } = renderWithRouterAndRedux (<App />);

    const testeEmail = 'test@test.com'
    const testeName = 'teste'
    const email = screen.getByTestId('input-gravatar-email');
    const name = screen.getByTestId('input-player-name');
    const btnEntrar = screen.getByTestId('btn-play');

    userEvent.type(email, testeEmail);
    userEvent.type(name, testeName);
    expect(btnEntrar).toBeEnabled();

    userEvent.click(btnEntrar);
    waitFor(() => {
        expect(screen.getByText('Game')).toBeInTheDocument();
        expect(history.location.pathname).toBe('/play');
    });
    
    
  }); 
  test('Se ao clicar no botão configurações e redirecionado para rota /config', () => {
    const { history } = renderWithRouterAndRedux (<App />);
    const btnSettings = screen.getByTestId("btn-settings");
    userEvent.click(btnSettings);
    waitFor(() => {
        expect(history.location.pathname).toBe('/config');
    });
  }) 

  test('Testa se localStorage é chamado', () => {
    renderWithRouterAndRedux(<App />);

    const tokenResponse = {
      response_code:0,
      response_message:"Token Generated Successfully!",
      token:"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
    };

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(tokenResponse),
    }));

    const email = screen.getByTestId('input-gravatar-email');
    const name = screen.getByTestId('input-player-name');

    userEvent.type(email, testeEmail)
    userEvent.type(name, testeName)
    const btnEntrar = screen.getByTestId('btn-play');
    userEvent.click(btnEntrar)

    waitFor(() => {
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });


    
  });
  })
  
