export interface Roles { 
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    apptronPhotoURL?:string;
    resume?:string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    phone?:string;
    address?:string;
    bio?:string;
    roles: Roles;
  }