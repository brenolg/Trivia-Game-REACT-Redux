import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import mockQuiz from './mocks/mockQuiz';

describe('Testa a tela de jogo', () => {
  test('Testa se a tela é renderizada na rota correta', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/play');

    const { pathname } = history.location;
    expect(pathname).toBe('/play');
  })

  test('Testa se o fetch é chamado', () => {
    renderWithRouterAndRedux(<App />, {}, '/play');

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockQuiz),
    }));

    waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    })
  })

  // test('Testa se renderiza as alternativas', () => {
  //   renderWithRouterAndRedux(<App />, {}, '/play');
    
  //   global.fetch = jest.fn(() => Promise.resolve({
  //     json: () => Promise.resolve(mockQuiz),
  //   }));

  //   waitFor(() => {
  //     const correctAnswer = screen.findByTestId('correct-answer');

  //     expect(correctAnswer).toBeInTheDocument();
  //   })
  // })
})