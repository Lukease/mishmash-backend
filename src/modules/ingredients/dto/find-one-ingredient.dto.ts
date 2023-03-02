import { IsAlphanumeric, IsString, MinLength } from 'class-validator'

export class FindOneIngredientDto {
  @IsString()
  @MinLength(2)
  @IsAlphanumeric()
  readonly ingredientName: string
}