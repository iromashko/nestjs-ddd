import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CamperFactory } from 'src/campers/camper.factory';
import { CreateCamperCommand } from './create-camper.command';

@CommandHandler(CreateCamperCommand)
export class CreateCamperHanler
  implements ICommandHandler<CreateCamperCommand> {
  constructor(
    private readonly camperFactory: CamperFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({
    createCamperRequest: { name, age, allergies },
  }: CreateCamperCommand): Promise<void> {
    const camper = this.eventPublisher.mergeObjectContext(
      await this.camperFactory.create(name, age, allergies),
    );

    camper.commit();
  }
}
