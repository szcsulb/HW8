const theForm = document.querySelector( 'form' );
const infoTable = document.querySelector( '#infoTable' );
const bindForm = () => {
  theForm.addEventListener( 'submit', e => {
    e.preventDefault();
    e.stopPropagation();
    let dataPkg = new FormData( theForm );
    renderTable( dataPkg );
  });
};
const renderTable = ( dataPkg ) => {
  let table = document.createElement( 'table' );
  let thead = document.createElement( 'thead' );
  let header = document.createElement( 'tr' );
  header.innerHTML = '<th>Key</th><th>Value</th>';
  thead.append( header );
  table.append( thead );
  table.id = 'sampleTable';
  for( const [k,v] of dataPkg ){
    let row = document.createElement( 'tr' );
    row.innerHTML = `<td>${k}</td><td>${v}</td>`;
    table.append( row );
  }
  infoTable.innerHTML = '';
  infoTable.append( table );
}
bindForm();