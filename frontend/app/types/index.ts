export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  isEmailVerified: boolean;
  updatedAt: Date;
  profilePicture?: string;
}

export interface Workspace {
  _id: string;
  name: string;
  description?: string;
  owner: User | string;
  color: string;
  members: {
    user: User | string;
    role: "admin" | "member" | "owner" | "viewer";
    joineAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
