

export function Listing({ lists, deleteButton, editButton }) {
  const listingStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    width: '300px',
  };

  const addressContainerStyle = {
    marginTop: '10px',
    paddingLeft: '20px',
    color: '#555',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={listingStyle}>
      <div>ID: {lists.id}</div>
      <div>Name: {lists.name}</div>
      <div>UserName: {lists.username}</div>
      <div>Email: {lists.email}</div>
      {lists.address && (
        <div style={addressContainerStyle}>
          Address:
          <ul>
            <li>Street: {lists.address.street || 'N/A'}</li>
            <li>Suite: {lists.address.suite || 'N/A'}</li>
            <li>City: {lists.address.city || 'N/A'}</li>
            <li>Zipcode: {lists.address.zipcode || 'N/A'}</li>
            <li>
              Geo: Lat: {lists.address.geo?.lat || 'N/A'}, Lng:{' '}
              {lists.address.geo?.lng || 'N/A'}
            </li>
          </ul>
        </div>
      )}
      {lists.company && (
        <div style={{ ...addressContainerStyle, marginTop: '10px' }}>
          Company:
          <ul>
            <li>Name: {lists.company.name || 'N/A'}</li>
            <li>CatchPhrase: {lists.company.catchPhrase || 'N/A'}</li>
            <li>BS: {lists.company.bs || 'N/A'}</li>
          </ul>
        </div>
      )}
      <div>PhoneNumber: {lists.phone}</div>
      <div>Webpage: {lists.website}</div>
      <div style={buttonContainerStyle}>
        {editButton}
        {deleteButton}
      </div>
      <br />
    </div>
  );
}
