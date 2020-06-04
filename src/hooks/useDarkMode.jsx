import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default ( key, initialValue ) =>
{
  const [  someValue, setSomeValue ] = useLocalStorage( key, initialValue );

  useEffect( () =>
  {
    JSON.parse( localStorage.getItem( key ) ) ? document.body.classList.add( "dark-mode" ) : document.body.classList.remove( "dark-mode" );
  } , [ someValue ] );

  return [ someValue, setSomeValue ];
}