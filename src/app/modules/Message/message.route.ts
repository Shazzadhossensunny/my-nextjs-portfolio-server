import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createMessageValidationSchema } from './message.validation';
import { MessageController } from './message.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(createMessageValidationSchema),
  MessageController.createMessage
);
router.get('/', MessageController.getAllMessages);
router.get('/:id', MessageController.getMessageById);
router.patch('/:id/read', MessageController.markMessageAsRead);
router.delete('/:id', MessageController.deleteMessage);

export const MessageRoutes = router;
