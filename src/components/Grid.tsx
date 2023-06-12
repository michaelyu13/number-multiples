import GridNumber from './GridNumber';

interface Props {
    gridNumbers: {
        id: string;
        number: number;
    }[];
}

const Grid = ({ gridNumbers }: Props) => {
    return (
        <div className="grid-numbers">
            {gridNumbers.map((gridNumber) => {
                return <GridNumber key={gridNumber.id} {...gridNumber} />;
            })}
        </div>
    );
};

export default Grid;
