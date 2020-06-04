import { useState } from "react";

export default ( key, initialValue ) =>
{
  const [ storedValue, setStoredValue ] = useState( () => localStorage.getItem( key ) ? JSON.parse( localStorage.getItem( key ) ) : initialValue ); 

  const setValue = value =>
  {
    setStoredValue( value );
    localStorage.setItem( key, JSON.stringify( value ) );
  }

  return [ storedValue, setValue ];
}