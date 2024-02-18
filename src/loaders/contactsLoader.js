import { getContacts } from "../Contacts";

export async function getContactsLoader() {
   const contacts = await getContacts();
   return { contacts };
 }