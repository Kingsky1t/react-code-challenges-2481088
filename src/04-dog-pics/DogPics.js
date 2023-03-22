import { useState, useEffect } from "react";
const getDogPic = async () => {
     const response = await fetch("https://dog.ceo/api/breeds/image/random");
     const dog = await response.json();
     return dog.message;
};
export default function DogPics() {
     const [imageUrl, setImageUrl] = useState("");
     useEffect(() => {
          getDogPic().then((url) => setImageUrl(url));
     }, []);

     return (
          <div className='dog-pics'>
               <img src={imageUrl} />

               <button onClick={async (e) => setImageUrl(await getDogPic())}>
                    🐶
               </button>
          </div>
     );
}
