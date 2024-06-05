import { Photo } from '@prisma/client';
import { PhotosService } from './photos.service';
import { CreatePhotoDTO } from './dtos/create-photo.dto';
export declare class PhotosController {
    private photosService;
    constructor(photosService: PhotosService);
    create(photoData: CreatePhotoDTO): Promise<Photo>;
}
