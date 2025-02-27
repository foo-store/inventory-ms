import { Controller } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AddProductDto } from './dto/add-product.dto';

@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @EventPattern('product.created')
  addProduct(@Payload() addProductDto: AddProductDto) {
    return this.inventoryService.addProduct(addProductDto);
  }
}
