import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import AttendanceForm from './components/AttendanceForm';
import AttendanceTable from './components/AttendanceTable';
import Filter from './components/Filter';

const App = () => {
  const [showApp, setShowApp] = useState(false);
  const [records, setRecords] = useState(() => {
    const stored = localStorage.getItem('attendanceRecords');
    return stored ? JSON.parse(stored) : [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('attendanceRecords', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord) => setRecords([...records, newRecord]);
  const deleteRecord = (index) => {
    const updated = [...records];
    updated.splice(index, 1);
    setRecords(updated);
  };
  const editRecord = (index, updatedRecord) => {
    const updated = [...records];
    updated[index] = updatedRecord;
    setRecords(updated);
  };

  return (
    <>
      {!showApp ? (
        <Landing onStart={() => setShowApp(true)} />
      ) : (
        <div className="container">
          <div className="header">
            <h2>Attendance Form</h2>
            <button onClick={() => setShowApp(false)}>Go Back</button>
          </div>
          <AttendanceForm onAdd={addRecord} />
          <Filter filter={filter} setFilter={setFilter} />
          <AttendanceTable
            records={records}
            filter={filter}
            onEdit={editRecord}
            onDelete={deleteRecord}
          />
        </div>
      )}
    </>
  );
};

export default App;
