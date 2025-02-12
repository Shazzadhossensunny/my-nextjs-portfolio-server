import { Schema, model } from 'mongoose';
import { TMessage } from './message.interface';

const messageSchema = new Schema<TMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Message = model<TMessage>('Message', messageSchema);
