import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`images/${image.name}`);
    imageRef
      .put(image)
      .then(() => {
        console.log("Image uploaded successfully");
        imageRef.getDownloadURL().then((url) => {
          setImageUrl(url);
        });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default ImageUpload;
