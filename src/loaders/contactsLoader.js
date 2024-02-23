import { getContact, getContacts } from "../Contacts";

export async function getContactsLoader() {
   const contacts = await getContacts();
   return { contacts };
 }
export async function getContactLoader({params}){
  const contact =await getContact(params.contactId);
  return {contact}
}