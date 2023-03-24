/*
<div id="parent">
 <div id ="child">
 <h1>I'm H1 tag from React</h1>
 <h2>I'm H2 tag from React</h2>
</div>
</div>
*/
const h1Tag = [React.createElement('h1', {}, 'I am h1 tag from React'), React.createElement('h2', {}, 'I am h2 tag from React')]
const childDiv = React.createElement('div', { id: 'child' }, h1Tag);
const parentDiv = React.createElement('div', { id: 'parent' }, childDiv);

const reactHeader = React.createElement('div', {},parentDiv);
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(reactHeader);