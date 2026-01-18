export interface Holerite {
  id: string;
  createdAt: string;
  natureza: string;
  imagem: string;
  view: boolean;
  fileError: string | null;
  data: string;
  targetUid: string;
  uid: string;
}

export interface User {
  uid?: string;
  id?: string;
  nome?: string;
  name?: string;
  image?: string;
  admin?: boolean;
  email?: string;
  role?: string;
  holerites?: Holerite[];
}
