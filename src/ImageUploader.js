import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [uploadedImagePath, setUploadedImagePath] = useState('');

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setUploadedImagePath(response.data.imagePath);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            {uploadedImagePath && (
                <div>
                    <p>Image uploaded successfully:</p>
                    <img src={`http://localhost:5000${uploadedImagePath}`} alt="Uploaded" style={{ width: '200px' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
