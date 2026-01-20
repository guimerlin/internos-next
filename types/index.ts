/**
 * Interface para o Usuário (Core)
 */
export interface User {
  id: number;
  username: string;
  fullName: string | null;
  role: 'admin' | 'user';
  createdAt?: Date | string;
  image?: string;
}

/**
 * Interface para o Holerite (Payslip)
 */
export interface Payslip {
  id: number;
  userId: number;
  natureza: string;
  fileUrl: string;
  referenciaMes: string; // Formato YYYY-MM
  dataEmissao: string; // Formato YYYY-MM-DD
  viewed: boolean;
  viewedAt: Date | string | null;
  createdAt: Date | string;
}

/**
 * Interface para a Sessão (Compatível com o seu auth())
 */
export interface Session {
  user: {
    id: number;
    username: string;
    role: 'admin' | 'user';
    fullName?: string;
    image?: string;
  };
  expires: string; // ISO Date String
}

/**
 * Interface para a resposta da API do Admin (Usuário com Holerites aninhados)
 */
export interface UserWithPayslips extends Omit<User, 'createdAt'> {
  payslips: Payslip[];
}

/**
 * Tipagem para as Variáveis do Hono (Contexto do Worker)
 */
export interface WorkerVariables {
  user: {
    id: number;
    role: string;
    username: string;
  };
}
