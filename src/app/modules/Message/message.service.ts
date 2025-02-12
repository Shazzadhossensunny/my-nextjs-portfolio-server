import { TMessage } from './message.interface';
import { Message } from './message.model';

const createMessage = async (payload: TMessage) => {
  return await Message.create(payload);
};

const getAllMessages = async () => {
  return await Message.find().sort({ createdAt: -1 });
};

const getMessageById = async (id: string) => {
  return await Message.findById(id);
};

const markMessageAsRead = async (id: string) => {
  return await Message.findByIdAndUpdate(id, { isRead: true }, { new: true });
};

const deleteMessage = async (id: string) => {
  return await Message.findByIdAndDelete(id);
};

export const MessageService = {
  createMessage,
  getAllMessages,
  getMessageById,
  markMessageAsRead,
  deleteMessage,
};
