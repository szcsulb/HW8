const theForm = document.querySelector( `#herokuCountries` );
const bindForm = () => {
  theForm.addEventListener( 'submit', e => {
    e.preventDefault();
    e.stopPropagation();
    let theName = document.getElementById( 'name' ).value;
    let dataPkg = {
       'name': theName
      ,'countries': [
        {
           'name': 'Hong Kong'
          ,'year': 1984
        },
        {
           'name': 'Canada'
          ,'year': 2001
        },
        {
           'name': 'Mexico'
          ,'year': 2020
        }
      ]
    };
    sendData( dataPkg );
  });
};

const sendData = ( dataPkg ) => {
  fetch( theForm.action, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify( dataPkg )
  })
  .then( r => r.text() )
  .then( res => {
    console.log( res );
  })
  .catch( err => {
    console.error( err.message );
  });
};

bindForm();