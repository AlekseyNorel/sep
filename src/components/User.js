import React from 'react';

const User = ({user}) => {
    const {name,id,username,email,address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website,company:{name:companyName,catchPhrase,bs}} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address: <ul>
                <li>street: {street}</li>
                <li>suite: {suite}</li>
                <li>city: {city}</li>
                <li>zipcode: {zipcode}</li>
                <li>geo: <ul>
                    <li>lat: {lat}</li>
                    <li>lng: {lng}</li>
                </ul>
                </li>
            </ul>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company: <ul>
                <li>companyName: {companyName}</li>
                <li>catchPhrase: {catchPhrase}</li>
                <li>bs: {bs}</li>
            </ul>
            </div>
            <hr/>
        </div>
    );
};

export {User};