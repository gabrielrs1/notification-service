import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { NotificationsController } from './http/controllers/notifications.controller';

@Module({
    imports: [],
    controllers: [NotificationsController],
    providers: [SendNotification],
})

export class HttpModule {}
