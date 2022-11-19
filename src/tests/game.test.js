import { screen, waitFor, act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Quiz from '../components/Quiz';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import mockInvalidToken from './mocks/mockInvalidToken';
import mockQuiz from './mocks/mockQuiz';
import mockToken from './mocks/mockToken';

afterEach(() => jest.clearAllMocks());
describe('Testa a tela de jogo', () => {
  test('Testa se a tela é renderizada na rota correta', () => {
    const { history } = renderWithRouterAndRedux(<Quiz />, {}, '/play');

    const { pathname } = history.location;
    expect(pathname).toBe('/play');
  })

  test('Testa se redireciona a pagina inicial se o token é inválido', () => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValueOnce(mockInvalidToken).mockResolvedValue(mockQuiz),
      });
    
    const { history } = renderWithRouterAndRedux(<Quiz />, {}, '/play');
    

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

    renderWithRouterAndRedux(<Quiz />, {}, '/play');
    

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

  renderWithRouterAndRedux(<Quiz />, {}, '/play');
  

  waitFor(() => {
    const category = screen.findByTestId('question-category');
    const question = screen.findByTestId('question-text');

    expect(category).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(category).toHaveTextContent('General Knowledge');
    expect(question).toHaveTextContent('What is a &quot;dakimakura&quot;?');
  })
})

test('Testa se ao clicar no botão next, a pergunta é modificada', () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValueOnce(mockToken).mockResolvedValue(mockQuiz),
  });

renderWithRouterAndRedux(<Quiz />, {}, '/play');


waitFor(() => {
  const alternativeButton = screen.findByTestId('correct-answer');
  act(()=> userEvent.click(alternativeButton));

  const nextButton = screen.queryByTestId('btn-next');
  act(()=> userEvent.click(nextButton));

  const category = screen.findByTestId('question-category');
  const question = screen.findByTestId('question-text');

  expect(category).toHaveTextContent('Geography');
  expect(question).toHaveTextContent('Which German city is located on the River Isar?');
})
})

  test('Testa se não renderiza o botão next quando as perguntas são renderizadas', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValueOnce(mockToken).mockResolvedValue(mockQuiz),
    })

    renderWithRouterAndRedux(<Quiz />, {}, '/play');
    

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

    renderWithRouterAndRedux(<Quiz />, {}, '/play');
    

    waitFor(() => {
      const correctAnswer = screen.getByTestId('correct-answer');
      act(()=> userEvent.click(correctAnswer))
      const nextButton = screen.queryByTestId('btn-next');

      expect(nextButton).toBeInTheDocument();
    })
  })
})