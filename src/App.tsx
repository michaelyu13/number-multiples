import { useState, useEffect, useRef } from 'react';
import Grid from './components/Grid';
import { GridContextProvider } from './context/GridContext';
import 'normalize.css';
import './assets/css/App.css';

const App: React.FC = () => {
    interface GridNumbers {
        id: string;
        number: number;
    }

    const [gridNumbers, setGridNumbers] = useState<GridNumbers[]>([]);
    const sideEffectRanOnceAfterInitialRender = useRef<boolean>(false);

    useEffect(() => {
        if (sideEffectRanOnceAfterInitialRender.current === false) {
            setupGrid();

            sideEffectRanOnceAfterInitialRender.current = true;
        }
    });

    const setupGrid = () => {
        const totalGridNumbers: number = 150;

        let gridNumbersToDisplay = [];

        for (let i = 0; i < totalGridNumbers; i++) {
            gridNumbersToDisplay.push({
                id: crypto.randomUUID(),
                number: i + 1,
            });
        }

        setGridNumbers(gridNumbersToDisplay);
    };

    return (
        <>
            <header>
                <h1>Number Multiples</h1>
                <p>Select a number to see the multiples of that&nbsp;number.</p>
            </header>
            <main>
                <GridContextProvider>
                    <Grid gridNumbers={gridNumbers} />
                </GridContextProvider>
            </main>
        </>
    );
};

export default App;
