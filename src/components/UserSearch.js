// src/components/UserSearch.js
import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import './UserSearch.css';
import { fetchUsers } from '../api/fetchUsers';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const result = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(result);
    } else {
      setFilteredUsers(users);
    }
  }, [searchTerm, users]);

  const handleSearch = debounce((e) => {
    setSearchTerm(e.target.value);
  }, 300);

  return (
    <div className="user-search">
      <input
        type="text"
        placeholder="Search Users"
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;