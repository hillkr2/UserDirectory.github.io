import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Email',
        field: 'email',
        width: 250
      },
      {
        label: 'Phone',
        field: 'phone',
        width: 250
      },
      {
        label: 'Photo',
        field: 'photo',
        width: 250
      }
    ],
    rows: [
      {
        name: 'Dionéia Castro',
        email: 'dioneia.castro@gary-and-sons.com',
        phone: '503-789-0011',
        photo: <img src="https://randomuser.me/api/portraits/women/1.jpg" className="img-fluid" alt="Dionéia Castro" />
      },
      {
        name: 'Athena Jakobsen',
        email: 'athena.jakobsen@gary-and-sons.com',
        phone: '503-789-0012',
        photo: <img src="https://randomuser.me/api/portraits/women/2.jpg" className="img-fluid" alt="Athena Jakobsen" />
      },
      {
        name: 'Angie Boyd',
        email: 'angie.boyd@gary-and-sons.com',
        phone: '503-789-0013',
        photo: <img src="https://randomuser.me/api/portraits/women/3.jpg" className="img-fluid" alt="Angie Boyd" />
      },
      {
        name: 'Caroline Poulsen',
        email: 'caroline.poulsen@gary-and-sons.com',
        phone: '503-789-0014',
        photo: <img src="https://randomuser.me/api/portraits/women/4.jpg" className="img-fluid" alt="Caroline Poulsen" />
      },
      {
        name: 'Grace Clark',
        email: 'grace.clark@gary-and-sons.com',
        phone: '503-789-0015',
        photo: <img src="https://randomuser.me/api/portraits/women/5.jpg" className="img-fluid" alt="Grace Clark" />
      },
      {
        name: 'Derek Matthews',
        email: 'derek.matthews@gary-and-sons.com',
        phone: '503-789-0016',
        photo: <img src="https://randomuser.me/api/portraits/men/1.jpg" className="img-fluid" alt="Derek Matthews" />
      },
      {
        name: 'Esteban Soler',
        email: 'esteban.soler@gary-and-sons.com',
        phone: '503-789-0017',
        photo: <img src="https://randomuser.me/api/portraits/men/2.jpg" className="img-fluid" alt="Esteban Soler" />
      },
      {
        name: 'Gonzalo Marin',
        email: 'gonzalo.marin@gary-and-sons.com',
        phone: '503-789-0018',
        photo: <img src="https://randomuser.me/api/portraits/men/3.jpg" className="img-fluid" alt="Gonzalo Marin" />
      },
      {
        name: 'Elliott Linnerud',
        email: 'elliott.linnerud@gary-and-sons.com',
        phone: '503-789-0019',
        photo: <img src="https://randomuser.me/api/portraits/men/4.jpg" className="img-fluid" alt="Elliott Linnerud" />
      },
      {
        name: 'Vílson Pinto',
        email: 'vilson.pinto@gary-and-sons.com',
        phone: '503-789-0100',
        photo: <img src="https://randomuser.me/api/portraits/men/5.jpg" className="img-fluid" alt="Vílson Pinto" />
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      searchLabel="Employee Search"

      paging={false}
      data={data}
    />
  );
}

export default DatatablePage;