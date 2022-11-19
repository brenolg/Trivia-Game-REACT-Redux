import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Testa a tela de Feedback', () => {
  test('Testa se a tela de Feedback é renderizada na rota correta', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/feedback');
      const { pathname } = history.location;
      expect(pathname).toBe('/feedback');
  })

  test('Testa se o header é renderizado na tela', () => {
    renderWithRouterAndRedux(<App />, {}, '/feedback');
      const name = screen.getByTestId('header-player-name');
      const score = screen.getByTestId('header-score');
      const profilePicture = screen.getByTestId('header-profile-picture');

      expect(name).toBeInTheDocument();
      expect(score).toBeInTheDocument();
      expect(profilePicture).toBeInTheDocument();
  })

  test('Testa se o score e as assertions são renderizadas na tela de feedback', () => {
    const initialState = {
      player: {
        name: 'Tryber',
        assertions: 3,
        score: 110,
        gravatarEmail: ''
      }
    }
    renderWithRouterAndRedux(<App />, initialState, '/feedback');

    const score = screen.getByTestId('feedback-total-score');
    const assertions = screen.getByTestId('feedback-total-question');

    expect(score).toHaveTextContent('110');
    expect(assertions).toHaveTextContent('3');
  })

  test('Testa se ao acertar só uma questão é renderizado o texto "Could be better..."', () => {
    const initialState = {
      player: {
        name: 'Tryber',
        assertions: 1,
        gravatarEmail: '',
        score: 70,
      }
    }
    renderWithRouterAndRedux(<App />, initialState, '/feedback');

    const feedbackText = screen.getByTestId('feedback-text');
    expect(feedbackText).toHaveTextContent('Could be better...');
  })

  test('Testa se ao acertar todas as questões é renderizado o texto "Well Done!"', () => {
    const initialState = {
      player: {
        name: 'Tryber',
        assertions: 5,
        gravatarEmail: '',
        score: 70,
      }
    }
    renderWithRouterAndRedux(<App />, initialState, '/feedback');

    const feedbackText = screen.getByTestId('feedback-text');
    expect(feedbackText).toHaveTextContent('Well Done!')
  })

  test('Testa se ao clicar no botão "Play Again" o usuário é redirecionado a tela de Login', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/feedback');

      const btnPlayAgain = screen.getByTestId('btn-play-again');
      userEvent.click(btnPlayAgain);

      waitFor(() => {
        const { pathname } = history.location;
        expect(pathname).toBe('/');
      })
  })

  test('Testa se ao clicar no botão "Ranking" o usuário é redirecionado para a página de ranking', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/feedback');

    const btnRanking = screen.getByTestId('btn-ranking');
    userEvent.click(btnRanking);

    waitFor(() => {
      const { pathname } = history.location;
      expect(pathname).toBe('/ranking');
    })
  })
});