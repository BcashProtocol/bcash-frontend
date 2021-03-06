import { createContext } from 'react';
import { Bank } from '../../bcash';

export interface BanksContext {
  banks: Bank[];
}

const context = createContext<BanksContext>({
  banks: [],
});

export default context;
