import { useGridContext } from '../../context/GridContext';
import { Button } from './GridNumber.style';

interface Props {
    id: string;
    number: number;
}
const GridNumber: React.FC<Props> = ({ id, number }) => {
    const gridContext = useGridContext();

    const handleNumberClick = (number: number) => {
        if (number % gridContext.selectedGridNumber === 0) {
            return gridContext.setSelectedGridNumber(0);
        }

        return gridContext.setSelectedGridNumber(number);
    };

    const isNumberMultiple = (number: number) => {
        return number % gridContext.selectedGridNumber === 0;
    };

    const isSelectedNumber = (number: number) => {
        return number === gridContext.selectedGridNumber;
    };

    return (
        <Button
            onClick={() => handleNumberClick(number)}
            className={`
                ${isNumberMultiple(number) ? 'highlighted' : ''}
                ${isSelectedNumber(number) && 'selected'}
            `}
            key={id}
            value={number}
        >
            {number}
        </Button>
    );
};

export default GridNumber;
