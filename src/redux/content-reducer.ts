import { GetActionsType } from './store';

const initialState = {
    pageNames: ['Screenshots', 'Performance', 'Features', 'Tracking', 'Integrations', 'Customers'] as string[],
    colors: ['#00c2ff', '#18CE76', '#FBB70B', '#E84040', '#4BC1E2', '#6D62FD',] as string[],
    selectedColor: '#00c2ff',
}


export type InitialStateType = typeof initialState;
type ActionsType = GetActionsType<typeof actions>

export const ContentReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CO/SET_COLOR':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export const actions = {
    setColor: (selectedColor: string) =>
        ({ type: 'CO/SET_COLOR', payload: { selectedColor } } as const),
}


