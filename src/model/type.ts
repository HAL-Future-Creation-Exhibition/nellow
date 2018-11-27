export interface User {
  icon: string;
  id: string;
  is_nellow: boolean;
  name: string;
  providing_destination: {
    id: number;
    name: string;
    rate: number;
  }
}