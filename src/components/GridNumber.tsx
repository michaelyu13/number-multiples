interface Props {
    id: string;
    number: number;
}

const GridNumber = ({ id, number }: Props) => {
    return (
        <button className="btn" key={id} value={number}>
            {number}
        </button>
    );
};

export default GridNumber;
