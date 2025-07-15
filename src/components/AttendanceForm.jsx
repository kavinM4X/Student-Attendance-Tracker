import { useState } from 'react';

const AttendanceForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [status, setStatus] = useState('Present');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !roll.trim()) {
      alert('Please fill in both name and roll number.');
      return;
    }

    const date = new Date().toLocaleDateString();
    onAdd({ name, roll, status, date });
    setName('');
    setRoll('');
    setStatus('Present');
  };

  return (
    <form onSubmit={handleSubmit} className="attendance-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
        required
      />
      <input
        type="text"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        placeholder="Roll Number"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="status-select"
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <button type="submit" className="submit-button">Mark Attendance</button>
    </form>
  );
};

export default AttendanceForm;
