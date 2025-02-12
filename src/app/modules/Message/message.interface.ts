export type TMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead?: boolean;
  createdAt?: Date;
};
