import { create } from "zustand";
import {mountStoreDevtool}  from 'simple-zustand-devtools';

interface GameQuery {
    genreId?: number;
    platformId?: number;
    ordering?: string;
    searchText?: string;
  }
interface GameQueryStore {
   gameQuery: GameQuery;
   setSearchText: (searchText: string) => void;
   setGenreId: (genreId: number) => void;
   setPlatformId: (platformId: number) => void;
   setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery: {},
    setSearchText: (searchText: string) => set(()=>({
        gameQuery: {searchText}
    })),
    setGenreId: (genreId: number) => set(store=>({gameQuery: {...store, genreId}})),
    setPlatformId: (platformId: number) => set(store=>({ gameQuery: {...store, platformId}})),
    setSortOrder: (sortOrder: string) => set(store=>({ gameQuery: {...store, ordering: sortOrder}})),
}));

if(process.env.NODE_ENV !== 'production')
    mountStoreDevtool('Game Query', useGameQueryStore);

export default useGameQueryStore;