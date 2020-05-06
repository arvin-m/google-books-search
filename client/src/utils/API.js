import React from 'react';

function API() {
    return (
        Axios.get('http://localhost:3001/save').then(function(data){
            console.log('data returned from BACkend', data)
        })
    )
    }
        
  
  
  export default API;
  