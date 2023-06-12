import { useState, useEffect, useRef } from 'react';
import Grid from './components/Grid';
import './assets/css/App.css';

function App() {
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

    return <Grid gridNumbers={gridNumbers} />;
}

export default App;
