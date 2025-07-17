import { Field, Textarea } from "@headlessui/react";

class ImageDisplay  {
  private imageIndex: number = 0;

  public constructor(public imageSrc: string, public title: string, public description: string) {
    imageSrc = imageSrc || '';
    title = title || '';
    description = description || '';
  }

  public setImageIndex(index: number) {
    this.imageIndex = index;
  }

  public getImageIndex() {
    return this.imageIndex;
  }

  render() {

      return (
        <>
          <div className="image-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <Field disabled>
              <div className="image-description">{this.description}</div>
            </Field>
          </div>
        </>
      )
    }
}

export default ImageDisplay