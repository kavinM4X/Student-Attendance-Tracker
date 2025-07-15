const AttendanceTable = ({ records, filter, onEdit, onDelete }) => {
  const handleEdit = (index) => {
    const record = records[index];
    const name = prompt('Edit Name:', record.name);
    const roll = prompt('Edit Roll:', record.roll);
    const status = prompt('Edit Status (Present/Absent):', record.status);

    if (!name || !roll || !['Present', 'Absent'].includes(status)) {
      alert('Invalid input.');
      return;
    }

    onEdit(index, { ...record, name, roll, status });
  };

  const filteredRecords = records.filter(
    (r) => filter === 'All' || r.status === filter
  );

  return (
    <div className="attendance-table-wrapper">
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((rec, index) => (
            <tr key={index}>
              <td>{rec.name}</td>
              <td>{rec.roll}</td>
              <td>{rec.date}</td>
              <td className={rec.status === 'Present' ? 'status-present' : 'status-absent'}>
                {rec.status}
              </td>
              <td>
                <button className="action-button edit" onClick={() => handleEdit(index)}>Edit</button>
                <button className="action-button delete" onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
