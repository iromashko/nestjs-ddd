import { CreateCamperHanler } from './create-camper/create-camper.handler';
import { UpdateAllergiesCommand } from './update-allergies/update-allergies.command';

export const CamperCommandHandlers = [
  CreateCamperHanler,
  UpdateAllergiesCommand,
];
