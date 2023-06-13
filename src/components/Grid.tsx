import GridNumber from './GridNumber';

interface Props {
    gridNumbers: {
        id: string;
        number: number;
    }[];
}

const Grid: React.FC<Props> = ({ gridNumbers }) => {
    return (
        <div className="grid-numbers">
            {gridNumbers.map((gridNumber) => {
                return <GridNumber key={gridNumber.id} {...gridNumber} />;
            })}
        </div>
    );
};

export default Grid;
