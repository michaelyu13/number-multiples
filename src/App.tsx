import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Main } from './App.style';
import Grid from './components/Grid/Grid';
import Header from './components/Header/SiteHeader';
import { GridContextProvider } from './context/GridContext';
import theme from './styles/theme';

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
        <ThemeProvider theme={theme}>
            <Container>
                <Header />

                <Main>
                    <GridContextProvider>
                        <Grid gridNumbers={gridNumbers} />
                    </GridContextProvider>
                </Main>
            </Container>
        </ThemeProvider>
    );
};

export default App;
