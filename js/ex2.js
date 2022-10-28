document.querySelector( 'form' ).addEventListener( 'submit', e => {
  e.preventDefault();
  e.stopPropagation();
  let gitUser = document.querySelector( '#gituser' ).value;
  fetch( `https://api.github.com/users/${gitUser}`)
    .then( res => res.text() )
    .then( user => {
      renderUser( JSON.parse( user ) );
    })
    .catch( err => {
      console.error( err.message );
    });
});

const renderUser = ( user ) => {
  let userInfo = document.getElementById("userInfo");
  let usertable = document.createElement("table");
  let userimage = document.createElement( 'img' );
  let username = document.createElement( 'tr' );
  let userblog = document.createElement( 'tr' );
  let usercreated = document.createElement( 'tr' );
  username.innerHTML = `<td>Name</td><td>${user.name}</td>`;
  userblog.innerHTML = `<td>Blog</td><td>${user.blog}</td>`;
  usercreated.innerHTML = `<td>Created</td><td>${user.created_at}</td>`;
  usertable.id="gitUserTable";
  usertable.append( username );
  usertable.append( userblog );
  usertable.append( usercreated );
  userInfo.innerHTML = `<p><img id="gitUserPhoto" src="${user.avatar_url}" /></p>`;
  userInfo.append( usertable );
  console.log( user );
};