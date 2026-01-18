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
  nome?: string;
  name?: string;
  image?: string;
  email?: string;
  role?: string;
  holerites?: Holerite[];
}
