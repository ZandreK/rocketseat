import ImageCaptioner from './ImageCaptioner';

export default function generateCaption(imageSrc) {
    ImageCaptioner.getCaptioner();
    return ImageCaptioner.generateCaption(imageSrc);
}