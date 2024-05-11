import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import api from "../services/api";

function ImageUpload() {
  const [newImage, setNewImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    try {
      // Get the current user's profile image URL from MongoDB
      if (!user) {
        throw new Error("User not found");
      }
      const oldImageUrl = decodeURIComponent(user?.url);

      // Upload the new profile image to Firebase Storage
      const storageRef = firebase.storage().ref();
      const newImageRef = storageRef.child(`images/${newImage.name}`);
      await newImageRef.put(newImage);
      console.log("New image uploaded successfully");

      // Get the download URL of the new profile image
      const newImageUrl = await newImageRef.getDownloadURL();
      setImageUrl(newImageUrl);

      // Update the user's profile image URL in MongoDB
      await api.post("/api/user/upload/profile", { imageUrl: newImageUrl });
      console.log("User's profile image URL updated successfully");

      // Delete the old profile image from Firebase Storage
      if (oldImageUrl) {
        // Extract the image file name from the URL
        const splitUrl = oldImageUrl.split("?");
        const splitPath = splitUrl[0].split("/");
        const oldImageName = splitPath.pop(); // Extract the image file name

        console.log("User's profile image URL", oldImageName);
        const oldImageRef = storageRef.child(`/images/${oldImageName}`);

        await oldImageRef.delete();
        console.log("Old image deleted successfully");
      }
    } catch (error) {
      console.error("Error handling image upload:", error);
      throw error;
    }
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
