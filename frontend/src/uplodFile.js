import React, { useState, forwardRef, useImperativeHandle } from "react";
import { generateReactHelpers } from "@uploadthing/react";

const { useUploadThing } = generateReactHelpers({
  url: process.env.REACT_APP_BACKEND_HOST + "/api/uploadthing",
});

const UploadThings = forwardRef((props, ref) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { startUpload, isUploading } = useUploadThing("imageUploader");

  // Expose handleSubmit to parent
  useImperativeHandle(ref, () => ({
    handleSubmit: async () => {
      const res = await startUpload(selectedFiles);
      const urls = res?.map((f) => f.ufsUrl);
      console.log("Upload complete. URLs:", urls);
      return urls;
    },
  }));

  return (
    <div className="uploadThings">
      <input
        type="file"
        multiple
        onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
      />
      {isUploading && <p>Uploading...</p>}
    </div>
  );
});

export default UploadThings;
