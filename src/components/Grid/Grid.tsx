import GridNumber from '../GridNumber/GridNumber';
import { GridNumbers } from './Grid.style';

interface Props {
    gridNumbers: {
        id: string;
        number: number;
    }[];
}

const Grid: React.FC<Props> = ({ gridNumbers }) => {
    return (
        <GridNumbers>
            {gridNumbers.map((gridNumber) => {
                return <GridNumber key={gridNumber.id} {...gridNumber} />;
            })}
        </GridNumbers>
    );
};

export default Grid;
