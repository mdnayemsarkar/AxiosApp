import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const fname ='welcome to your new journy';
const fsname ='Nayem';
const lsname ='sarkar';
const img1 ='https://picsum.photos/536/354';
const link ='https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14';

ReactDOM.render(
<div >
<h1 contentEditable='true'>Hello world!!{' '} {fname}</h1>
<h1>my name is {`${fsname} ${lsname}`}</h1>
<p>Nayem sarkar</p>
<p>do the sum {5*5}</p>
<p> my lucky number is {30*30}
</p>
<img src="https://picsum.photos/536/354" alt=""  height='240px' width='420px'/>
 <a href={link} target='_nayem'>
 <img src={img1} alt=""  height='240px' width='420px'/>
 </a>
 
</div>,
document.getElementById('root')
);

