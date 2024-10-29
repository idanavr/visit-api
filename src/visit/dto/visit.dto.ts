import { IsNotEmpty, IsString } from 'class-validator';

export class VisitDto {
    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    date: Date;
}
