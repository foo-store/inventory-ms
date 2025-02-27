import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';
import { NATS_SERVICE } from 'src/common/constants';
import { AddProductDto } from './dto/add-product.dto';

@Injectable()
export class InventoryService extends PrismaClient implements OnModuleInit {
  private logger = new Logger('InventoryService');

  onModuleInit() {
    this.$connect();
    this.logger.log('Connected to the database');
  }

  constructor(@Inject(NATS_SERVICE) private readonly clientProxy: ClientProxy) {
    super();
  }

  async addProduct(addProductDto: AddProductDto) {
    await this.inventory.create({ data: addProductDto });
    console.log('Product added to inventory', addProductDto);
  }
}
