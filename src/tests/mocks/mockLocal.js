export const mockLocalStorage = [ 
    {"score":'1',"name":"test1"},
    {"score":'6',"name":"test2"},
]

export const rankingSort = mockLocalStorage.sort((playerOne , playerTwo ) => playerTwo.score - playerOne.score)