import React from 'react';
import TodoList from './TodoList';
import Profile from './Profile';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#f59e0b', marginBottom: '20px' }}>
                    My Profile
                </h2>
                <Profile />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;