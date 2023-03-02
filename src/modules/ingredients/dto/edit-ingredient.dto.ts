import { IsAlphanumeric, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'

export class EditIngredientDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly ingredientId: number

  @IsString()
  @MinLength(2)
  @IsAlphanumeric()
  readonly newIngredientName: string
}