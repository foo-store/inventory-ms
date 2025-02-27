import { Module } from '@nestjs/common';
import { natsProvider } from 'src/common/providers';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService, natsProvider],
})
export class InventoryModule {}
