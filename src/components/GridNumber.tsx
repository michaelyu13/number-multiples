import { useGridContext } from '../context/GridContext';

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
        <button
            onClick={() => handleNumberClick(number)}
            className={`
                btn
                ${isNumberMultiple(number) ? 'btn--highlighted' : ''}
                ${isSelectedNumber(number) && 'btn--selected'}
            `}
            key={id}
            value={number}
        >
            {number}
        </button>
    );
};

export default GridNumber;
