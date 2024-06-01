import React from 'react';
import { Table } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.user.name);

    if (!user) {
        return <div>You need to log in to view this page.</div>;
    }

    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <h1>Welcome, {user.user.name}</h1>
            </div>
            <div className="dashboard-table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default Dashboard;
