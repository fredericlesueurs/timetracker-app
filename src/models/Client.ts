export default interface Client {
    id: string;
    name: string;
    description?: string;
    comments?: string;
    address?: string;
    zip_code?: string;
    city?: string;
    contact_name?: string;
    phone?: string;
    email?: string;
    logo?: string;
  }