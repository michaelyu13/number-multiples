import React from 'react';

export type GridContextType = {
    selectedGridNumber: number;
    setSelectedGridNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const GridContext = React.createContext<GridContextType | null>(null);

type Props = {
    children: React.ReactNode;
};

export const GridContextProvider = ({ children }: Props) => {
    const [selectedGridNumber, setSelectedGridNumber] = React.useState<number>(0);

    return (
        <GridContext.Provider value={{ selectedGridNumber, setSelectedGridNumber }}>{children}</GridContext.Provider>
    );
};

export const useGridContext = () => {
    const gridContext = React.useContext(GridContext);

    if (!gridContext) throw new Error('You need to use this context inside a provider');

    return gridContext;
};
