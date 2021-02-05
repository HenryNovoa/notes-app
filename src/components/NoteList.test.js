import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { NotesContext } from '../context'
import { notesReducer } from '../reducer'
import { NoteList } from './NoteList'

jest.mock('../reducer')

describe('NoteList Component tests', () => {
  let wrapper = null;
  let value = {};
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
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('Should render notes-container', () => {
    const initialState = { notes: [] };
    wrapper = wrapperFactory(initialState);

    render(<NoteList />, { wrapper });

    expect(document.querySelector('.notes-container')).toBeInTheDocument();
  });

   test('Should render notes when state is available', () => {
    const initialState = { notes: [
      {id: 1, text: 'take out dog'},
      {id: 2, text: 'take out garbage'}
    ] };
    wrapper = wrapperFactory(initialState);

    render(<NoteList />, { wrapper });

    expect(document.querySelector('div[id=\'2\'] p').innerHTML).toBe('take out garbage')
  });
/* 
  test('Should render loading-container when loading is true ', () => {
    const initialState = { pokeReducer: { loading: true } };
    wrapper = wrapperFactory(initialState);

    render(<PokemonList />, { wrapper });

    expect(document.querySelector('.loading-container')).toBeInTheDocument();
  });

  test('Should render pokemon-list when loading is false & there is a pokemon List ', () => {
    const initialState = { pokeReducer: { pokemonList: [{ id: 1, name: 'pikachu' }] } };
    wrapper = wrapperFactory(initialState);

    render(<PokemonList />, { wrapper });

    expect(document.querySelector('.pokemon-list')).toBeInTheDocument();
  });

  test('Should render pokemon-list with items when having a displayPokemonList ', () => {
    const initialState = {
      pokeReducer: {
        pokemonList: [{ id: 1, name: 'pikachu' }],
        displayPokemonList: [
          {
            id: 1,
            name: 'pikachu',
            types: [{ type: { name: 'electric' } }],
            sprites: { front_default: 'url' },
          },
        ],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<PokemonList />, { wrapper });

    expect(document.querySelector('.pokemon__name').innerHTML).toBe('pikachu');
  });

  test('Should execute handleChange and call filterPokemonByName when searching with 3 or more characters', () => {
    const initialState = {
      pokeReducer: {
        pokemonList: [{ id: 1, name: 'pikachu' }],
        displayPokemonList: [
          {
            id: 1,
            name: 'pikachu',
            types: [{ type: { name: 'electric' } }],
            sprites: { front_default: 'url' },
          },
        ],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<PokemonList />, { wrapper });

    const searchInput = document.querySelector('.screen__input');

    fireEvent.change(searchInput, { target: { value: 'random' } });

    expect(filterPokemonByName).toHaveBeenCalled();
  });

  test('Should execute handleChange and call fillDisplayPokemonList when searching with less than 3 characters', () => {
    const initialState = {
      pokeReducer: {
        pokemonList: [{ id: 1, name: 'pikachu' }],
        displayPokemonList: [
          {
            id: 1,
            name: 'pikachu',
            types: [{ type: { name: 'electric' } }],
            sprites: { front_default: 'url' },
          },
        ],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<PokemonList />, { wrapper });

    const searchInput = document.querySelector('.screen__input');

    fireEvent.change(searchInput, { target: { value: 'as' } });

    expect(fillDisplayPokemonList).toHaveBeenCalled();
  });

  test('Should execute handleClick and call fillDisplayPokemonList when clicking a pokemon card', () => {
    const initialState = {
      pokeReducer: {
        pokemonList: [{ id: 1, name: 'pikachu' }],
        displayPokemonList: [
          {
            id: 1,
            name: 'pikachu',
            types: [{ type: { name: 'electric' } }],
            sprites: { front_default: 'url' },
          },
        ],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<PokemonList />, { wrapper });

    const linkElement = document.querySelector('.link');

    fireEvent.click(linkElement);

    expect(fillDisplayPokemonList).toHaveBeenCalled();
  }); */
});