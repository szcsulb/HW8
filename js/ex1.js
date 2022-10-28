const fetchURL = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json';
const displayPaintings = ( paintings ) => {
  for( painting of paintings ) {
    let paintingsList = document.querySelector( '#paintings-list' );
    let row = document.createElement( 'tr' );
    row.innerHTML = `<td>${painting.name}</td><td>${painting.year}</td><td>${painting.artist}</td>`;
    paintingsList.append( row );
  }
};

fetch( fetchURL ).then( res => res.text() ).then( paintings => {
  displayPaintings( JSON.parse( paintings ) );
})
.catch( err => { console.error( err.message ); } );

