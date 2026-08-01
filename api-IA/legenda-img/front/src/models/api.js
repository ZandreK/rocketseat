import ImageCaptioner from './ImageCaptioner';

export default async function generateCaption(imageSrc) {
    ImageCaptioner.getCaptioner();
    return ImageCaptioner.generateCaption(imageSrc);
}