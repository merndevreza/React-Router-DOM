import { getContact, getContacts } from "../Contacts";

export async function getContactsLoader({request}) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);//if q is empty then it get all contact, if q= "text..." then if filter the contacts
   return { contacts,q };
 }
export async function getContactLoader({params}){
  const contact =await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return {contact}
}