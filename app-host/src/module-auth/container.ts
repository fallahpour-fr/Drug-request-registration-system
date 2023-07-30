import { createContext,useContext } from 'react';
import { defaultValue , IModel } from './model';

export const AuthContext = createContext(defaultValue);

export const useContainer = (): IModel => {
    return useContext(AuthContext)
}
