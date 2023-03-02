import { IsAlphanumeric, IsNumber, MaxLength } from 'class-validator'

export class RemoveRecipeIngredientsDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly recipesIngredientsId: number
}