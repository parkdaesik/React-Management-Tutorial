import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '차인표',
  'birthday': '94132',
  'gender' :'남자',
  'job':'배우'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '송종국',
  'birthday': '75231',
  'gender' :'남자',
  'job':'축구선수'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '박지성',
  'birthday': '950111',  
  'gender' :'남자',
  'job':'축구선수'
},
{
  'id':4,
  'image': 'https://placeimg.com/64/64/4',
  'name': '임동선',
  'birthday': '94132',
  'gender' :'남자',
  'job':'대학생'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}

            />
          )
        })
      }
    </div>
  );
}

export default App;
