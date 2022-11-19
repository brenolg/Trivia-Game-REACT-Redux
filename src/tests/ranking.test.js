import {  screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockQuiz from './mocks/mockQuiz';
import mockToken from './mocks/mockToken'
import { mockLocalStorage, rankingSort } from './mocks/mockLocal';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Criando testes para Página de Ranking', () => {

  beforeEach(()=>{
    localStorage.setItem('player', JSON.stringify(mockLocalStorage));
  })

    test('Teste renderização da pagina do Ranking',() => {
        const { history } = renderWithRouterAndRedux(<App />, {}, '/ranking');
        const { pathname } = history.location;
        expect(pathname).toBe('/ranking');
    })

    test('Teste renderização da pagina do Login pos clicar np botão Play Again ',() => {
        const { history } = renderWithRouterAndRedux(<App />, {}, '/ranking');
        
         const btnPlay = screen.getByTestId('btn-go-home')
         userEvent.click(btnPlay)
        
        const { pathname } = history.location;
        expect(pathname).toBe('/');
    })

    test('Teste renderização da pagina do Ranking com dois players ',() => {      
        renderWithRouterAndRedux(<App />, {}, '/ranking')

         const playerOneName = screen.getByTestId('player-name-0')
         const playerTwoName = screen.getByTestId('player-name-1')
         const playerOneScore = screen.getByTestId('player-score-0')
         const playerTwoScore = screen.getByTestId('player-score-1')

         expect(playerOneName).toBeInTheDocument()
         expect(playerTwoName).toBeInTheDocument()
         expect(playerOneScore).toBeInTheDocument()
         expect(playerTwoScore).toBeInTheDocument()   
    })

    test('Teste renderização da pagina do Ranking ordenada',() => {
        
        renderWithRouterAndRedux(<App />, {}, '/ranking')

        const playerOneName = screen.getByTestId('player-name-0')
        expect(playerOneName.innerHTML).toBe(rankingSort[0].name);

        const playerTwoName = screen.getByTestId('player-name-1')
        expect(playerTwoName.innerHTML).toBe(rankingSort[1].name);

        const playerOneScore = screen.getByTestId('player-score-0')
        expect(playerOneScore.innerHTML).toBe(rankingSort[0].score);

        const playerTwoScore = screen.getByTestId('player-score-1')
        expect(playerTwoScore.innerHTML).toBe(rankingSort[1].score);       
    })
})



         
// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     clear: jest.fn()
//   };
//   global.localStorage = localStorageMock;