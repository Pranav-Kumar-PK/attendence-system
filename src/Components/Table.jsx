const Table = (props) => {

    const students = props.data;

    return (
        <div>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Roll No</th>
                        <th scope="col">Checkin Time</th>
                        <th scope="col">Checkout Time</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, idx) => {
                        return (
                            <tr key={idx.toString()}>
                                <th scope="row">{idx + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.rollNo}</td>
                                <td>{item.checkin}</td>
                                <td>{item.checkout}</td>
                            </tr>)
                    })}
                </tbody>
            </table></div>
    )
}

export default Table;