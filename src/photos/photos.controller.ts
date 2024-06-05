import {
    Controller,
    Get,
    Post,
    Body,
} from '@nestjs/common';
import { Photo } from '@prisma/client';
import { PhotosService } from './photos.service';
import { CreatePhotoDTO } from './dtos/create-photo.dto';


@Controller('photos')
export class PhotosController {
    constructor(private photosService: PhotosService) {
        this.photosService = photosService;
    }


    @Post('/')
    create(@Body() photoData: CreatePhotoDTO): Promise<Photo> {
        return this.photosService.create(photoData);
    }
}
