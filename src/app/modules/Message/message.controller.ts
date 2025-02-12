import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { MessageService } from './message.service';
import catchAsync from '../../utils/catchAsynce';
import sendResponse from '../../utils/sendResponse';

const createMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.createMessage(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Message sent successfully',
    data: result,
  });
});

const getAllMessages = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.getAllMessages();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Messages retrieved successfully',
    data: result,
  });
});

const getMessageById = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.getMessageById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Message retrieved successfully',
    data: result,
  });
});

const markMessageAsRead = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.markMessageAsRead(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Message marked as read',
    data: result,
  });
});

const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const result = await MessageService.deleteMessage(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Message deleted successfully',
    data: result,
  });
});

export const MessageController = {
  createMessage,
  getAllMessages,
  getMessageById,
  markMessageAsRead,
  deleteMessage,
};
