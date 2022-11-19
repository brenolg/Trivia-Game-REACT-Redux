import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import mockInvalidToken from './mocks/mockInvalidToken';
import mockQuiz from './mocks/mockQuiz';
import mockToken from './mocks/mockToken';

afterEach(() => jest.clearAllMocks());
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

  test('Testa se redireciona a pagina inicial se o token é inválido', () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce(mockInvalidToken).mockResolvedValue(mockQuiz),
      });
    
    const { history } = renderWithRouterAndRedux(<App />, {}, '/play');
    

    waitFor(() => {
      const { pathname } = history.location;

      expect(pathname).toBe('/');
    })
  })

  test('Testa se renderiza as alternativas', () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce(mockToken).mockResolvedValue(mockQuiz),
      });

    renderWithRouterAndRedux(<App />, {}, '/play');
    

    waitFor(() => {
      const alternatives = screen.findAllByRole('button');

      expect(alternatives).toHaveLength(4);
    })
  })

  test('Testa se renderiza a pergunta e a categoria corretamente', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValueOnce(mockToken).mockResolvedValue(mockQuiz),
    });

  renderWithRouterAndRedux(<App />, {}, '/play');
  

  waitFor(() => {
    const category = screen.findByTestId('question-category');
    const question = screen.findByTestId('question-text');

    expect(category).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(category).toHaveTextContent('General Knowledge');
    expect(question).toHaveTextContent('What is a &quot;dakimakura&quot;?');
  })
})

  test('Testa se não renderiza o botão next quando as perguntas são renderizadas', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValueOnce(mockToken).mockResolvedValue(mockQuiz),
    })

    renderWithRouterAndRedux(<App />, {}, '/play');
    

    waitFor(() => {
      const nextButton = screen.queryByTestId('btn-next');

      expect(nextButton).toBeNull();
    })
  })

  test('Testa se o botão next é renderizado após responder a pergunta', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValueOnce(mockToken).mockResolvedValue(mockQuiz),
    });

    renderWithRouterAndRedux(<App />, {}, '/play');
    

    waitFor(() => {
      const correctAnswer = screen.getByTestId('correct-answer');
      act(()=> userEvent.click(correctAnswer))
      const nextButton = screen.queryByTestId('btn-next');

      expect(nextButton).toBeInTheDocument();
    })
  })
})