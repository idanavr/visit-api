import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVisitDto {
    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    date: Date;
};
