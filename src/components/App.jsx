import { Phonebook } from "./Phonebook";
import { Contacts } from "./Contacts/Contacts";

export function App() {

  return (
    <div
        style={{
        marginLeft:'20px'
        }}>
        
      <Phonebook  />
      <Contacts />
      
      </div>)
};