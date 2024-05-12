import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import back from "../assets/images/left.png";
import { NavLink } from "react-router-dom";
import api from "../services/api";

function ImageUpload() {
  const [newImage, setNewImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
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
      <div className="flex h-screen w- full bg-blue-200 justify-center items-center ">
        <div className="flex  bg-gray-200 rounded-xl justify-center p-3 text-left  flex-col">
          <div className="text-xl font-bold  flex flex-row items-center">
            <div>
              <NavLink to={"/dashboard"}>
                <img className="h-5 w-5 mr-2" src={back}></img>
              </NavLink>
            </div>
            <div>Profile Photo</div>
          </div>
          <div
            className="h-72 w-80 bg-white rounded-lg flex flex-col justify-center items-center"
            onClick={() => document.getElementById("fileInput").click()}
          >
            Click to select image
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {imageUrl && (
              <img
                className="h-56 w-56 rounded-full object-cover"
                src={imageUrl}
                alt="Uploaded"
              />
            )}
          </div>

          <div className=" h-16 flex flex-row item-center justify-center">
            <div className="flex items-center ">
              <button
                className="bg-blue-800 text-white rounded-md text-sm  ml-2 font-600 w-52 h-12 
                          border-2 border-solid"
                onClick={handleImageUpload}
              >
                {isClicked ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  "Upload Image"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
