import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsService } from "./ingredients.service";
import { IngredientsController } from "./ingredients.controller";
import { Ingredient } from "../../lib/entity/ingredients.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  providers: [IngredientsService],
  controllers: [IngredientsController],
})
export class IngredientsModule {}