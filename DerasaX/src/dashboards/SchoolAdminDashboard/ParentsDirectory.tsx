import React, { useState } from 'react';
import './ParentsDirectory.css';

interface Parent {
  id: number;
  parentName: string;
  linkedStudent1: string;
  linkedStudent2: string;
}

export const ParentsDirectory: React.FC = () => {
  const [parents, setParents] = useState<Parent[]>([]);
  const [parentName, setParentName] = useState('');
  const [linkedStudent1, setLinkedStudent1] = useState('');
  const [linkedStudent2, setLinkedStudent2] = useState('');

  const handleAddParent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim()) return;
    const newParent: Parent = {
      id: Date.now(),
      parentName,
      linkedStudent1,
      linkedStudent2
    };
    setParents([...parents, newParent]);
    setParentName('');
    setLinkedStudent1('');
    setLinkedStudent2('');
  };

  return (
    <div className="parents-directory-page">
      <div className="page-header">
        <div>
          <h2>Parents Directory</h2>
          <p>View and manage parent information and linked students</p>
        </div>
        <button className="refresh-btn">Refresh</button>
      </div>

      <div className="add-parent-card">
        <h3>Add New Parent</h3>
        <form onSubmit={handleAddParent} className="add-parent-form">
          <input 
            type="text" 
            placeholder="Parent Name" 
            value={parentName} 
            onChange={e => setParentName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Linked Student 1" 
            value={linkedStudent1} 
            onChange={e => setLinkedStudent1(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Linked Student 2" 
            value={linkedStudent2} 
            onChange={e => setLinkedStudent2(e.target.value)} 
          />
          <button type="submit" className="add-btn">Add Parent</button>
        </form>
      </div>

      <div className="directory-history-card">
        <h3>Announcements History</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>Parent Name</th>
              <th>Linked Students</th>
              <th>Linked Students</th>
            </tr>
          </thead>
          <tbody>
            {parents.map(parent => (
              <tr key={parent.id}>
                <td>{parent.parentName}</td>
                <td>{parent.linkedStudent1}</td>
                <td>{parent.linkedStudent2}</td>
              </tr>
            ))}
            {parents.length === 0 && (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center', padding: '30px', color: '#999' }}>
                  No parents added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
