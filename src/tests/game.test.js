import { screen, waitFor, act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import mockInvalidToken from './mocks/mockInvalidToken';
import mockQuiz from './mocks/mockQuiz';
import mockToken from './mocks/mockToken';

const initialState = {
  player: {
    name: 'Tryber',
    assertions: 0,
    gravatarEmail: 'teste@teste.com',
    score: 0,
    token: "f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6",
    timer: 30,
  }
}

describe('Testa a tela de jogo', () => {
  afterEach(() => jest.clearAllMocks());
  test('Testa se a tela é renderizada na rota correta', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/play');

    const { pathname } = history.location;
    expect(pathname).toBe('/play');
  })

  test('Testa se redireciona a pagina inicial se o token é inválido', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockInvalidToken),
    });

    const { history } = renderWithRouterAndRedux(<App />, {}, '/play');

    waitFor(() => {
      const { pathname } = history.location;

      expect(pathname).toBe('/');
    })
  })

  test('Testa se renderiza as alternativas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockQuiz),
    });

    renderWithRouterAndRedux(<App />, initialState, '/play');


    const alternatives = await screen.findAllByRole('button');

    expect(alternatives).toHaveLength(4);
  })

  test('Testa se renderiza a pergunta e a categoria corretamente', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockQuiz),
    });

    renderWithRouterAndRedux(<App />, {}, '/play');


    const category = await screen.findByTestId('question-category');
    const question = await screen.findByTestId('question-text');

    expect(category).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(category).toHaveTextContent('General Knowledge');
    expect(question).toHaveTextContent('What is a &quot;dakimakura&quot;?');
  })

  test('Testa se ao clicar no botão next, a pergunta é modificada', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockQuiz),
    });

    renderWithRouterAndRedux(<App />, {}, '/play');


    const alternativeButton = await screen.findByTestId('correct-answer');
    act(() => userEvent.click(alternativeButton));

    const nextButton = await screen.findByTestId('btn-next');
    act(() => userEvent.click(nextButton));

    waitFor(() => {
      const category = screen.findByTestId('question-category');
      const question = screen.findByTestId('question-text');

      expect(category).toHaveTextContent('Geography');
      expect(question).toHaveTextContent('Which German city is located on the River Isar?');
    })
  })

  test('Testa se não renderiza o botão next quando as perguntas são renderizadas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockQuiz),
    })

    renderWithRouterAndRedux(<App />, {}, '/play');

    const nextButton = screen.queryByTestId('btn-next');

    expect(nextButton).toBeNull();
  })

  test('Testa se o botão next é renderizado após responder a pergunta', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockQuiz),
    });

    renderWithRouterAndRedux(<App />, {}, '/play');


    const correctAnswer = await screen.findByTestId('correct-answer');
    act(() => userEvent.click(correctAnswer))

    const nextButton = await screen.findByTestId('btn-next');

    expect(nextButton).toBeInTheDocument();
  })

  test('Espera que após responder 5 perguntas, o jogador é redirecionado para a tela de feedback', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockQuiz),
    });

    const { history } = renderWithRouterAndRedux(<App />, {}, '/play');

    const correct_answer1 = await screen.findByTestId('correct-answer')

    act(() => userEvent.click(correct_answer1));
    const nextButton1 = await screen.findByTestId('btn-next');
    act(() => userEvent.click(nextButton1));

    const correct_answer2 = await screen.findByTestId('correct-answer');
    act(() => userEvent.click(correct_answer2));
    const nextButton2 = await screen.findByTestId('btn-next');
    act(() => userEvent.click(nextButton2));

    const correct_answer3 = await screen.findByTestId('correct-answer');
    act(() => userEvent.click(correct_answer3));
    const nextButton3 = await screen.findByTestId('btn-next');
    act(() => userEvent.click(nextButton3));

    const correct_answer4 = await screen.findByTestId('correct-answer');
    act(() => userEvent.click(correct_answer4));
    const nextButton4 = await screen.findByTestId('btn-next');
    act(() => userEvent.click(nextButton4));

    const correct_answer5 = await screen.findByTestId('correct-answer');
    act(() => userEvent.click(correct_answer5));
    const nextButton5 = await screen.findByTestId('btn-next');
    act(() => userEvent.click(nextButton5));

    const { pathname } = history.location;
    expect(pathname).toBe('/feedback');
  });
  // test('Testa se após 30 segundos desabilita os botões', () => {

  // })
})
