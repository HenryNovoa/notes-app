import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { NotesContext } from '../context'
import { notesReducer } from '../reducer'
import { Note } from './Note'

jest.mock('../reducer')

describe('Note tests', () => {
  let wrapper = null
  let value = {}
  const wrapperFactory = (wrapperInitialState) => {
    value.state = wrapperInitialState;
    value.dispatch = jest.fn();

    return ({ children }) => (
      <NotesContext.Provider value={value}>
          {children}
      </NotesContext.Provider>
    )
  }

  afterEach(() => {
    jest.restoreAllMocks()
    wrapper = null
  })

  test('Should render loading when loading is true', () => {
    const initialState = {
      pokeReducer: {
        loading: true,
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<PokemonDetail />, { wrapper });

    expect(document.querySelector('.loading-container')).toBeInTheDocument();
  });

  test('Should render error msg when there is an error loading the pokemon', () => {
    const initialState = {
      pokeReducer: {
        error: 'ErrorCode & things',
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<PokemonDetail />, { wrapper });

    expect(document.querySelector('.error__msg').innerHTML)
      .toBe('There has been an error loading the pokemon');
  });

  test('Should render pokemon-detail', () => {
    const initialState = {
      pokeReducer: {
        pokemonDetail: {
          id: 1,
          name: 'bulbasaur',
          types: [{
            type: {
              name: 'grass',
            },
          }],
          sprites: { front_default: 'url', back_default: 'url' },
          stats: [{ stat: { name: 'name' } }],
        },
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<PokemonDetail />, { wrapper });

    expect(document.querySelector('.pokemon-detail')).toBeInTheDocument();
  });

  describe('UseEffect test', () => {});
  test('Should dispatch loadPokemonById', () => {
    const initialState = {
      pokeReducer: {
        pokemonDetail: {
          id: 1,
          name: 'bulbasaur',
          types: [{
            type: {
              name: 'grass',
            },
          }],
          sprites: { front_default: 'url', back_default: 'url' },
          stats: [{ stat: { name: 'name' } }],
        },
      },
    };

    wrapper = wrapperFactory(initialState);

    render(<PokemonDetail />, { wrapper });

    expect(store.dispatch).toHaveBeenCalled();
  });
});