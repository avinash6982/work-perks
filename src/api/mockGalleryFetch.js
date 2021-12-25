import image01 from "../assets/images/img02.jpeg";
import image02 from "../assets/images/img03.jpeg";
import image03 from "../assets/images/img04.jpeg";

//Mock api for fetching images from gallery
//Returns a promise with results with a delay of 1s
export const mockGalleryFetch = async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([image01, image02, image03]);
    }, 1000);
  });
