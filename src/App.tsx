import React from 'react';
import Button from './component/button/Button';
import Avatar from './component/avatar/Avatar';
import Input from './input/Input';


function App() {
  return (
    <div>
      <Button label='Button 1 Primary' variant='primary' />
      <Button label='Button 2 Secondary' variant='secondary' />
      <Avatar size='large' url="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" label="Gambar 1"  />

      <Avatar size='medium' url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" label="Gambar 2"/>

      <Avatar size='small' url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" label="Gambar 2"/>
      <Input placeholder='Masukan Username' onChange={(e)=> {console.log('username', e.target.value)}} />
      <br />
      <Input placeholder='Masukan Password' type='password' onChange={(e)=> {console.log('password', e.target.value)}} />
      <br />
      <Input placeholder='Masukan Angka' type='number' onChange={(e)=> {console.log('masukan angka', e.target.value)}} />
    </div>
  );
}

export default App;
