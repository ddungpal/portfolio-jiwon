import React, { useState } from "react";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Topbar from "../components/Topbar";

export default function Exibition() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false); // uploading
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득
    uploadImage(file)
      .then((url) => {
        console.log(url);
        // Firebase에 새로운 제품을 추가함
        addNewProduct(product, url).then(() => {
          setSuccess("성공적으로 이미지가 등록되었습니다.");
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <>
      <Topbar />
      <div className="relative flex flex-wrap items-center justify-between px-2 mt-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <section className="w-full text-center">
            <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
            {success && <p className="my-2">✅ {success}</p>}
            {file && (
              <img
                className="w-96 mx-auto mb-2"
                src={URL.createObjectURL(file)}
                alt="local file"
              />
            )}
            <form className="flex flex-col px-12" onSubmit={handleSubmit}>
              <input
                className="p-4 outline-none border border-gray-300 my-1"
                type="file"
                accept="image/*|video/*"
                name="file"
                required
                onChange={handleChange}
              />
              <input
                className="p-4 outline-none border border-gray-300 my-1"
                type="text"
                name="title"
                value={product.title ?? ""}
                placeholder="캡션"
                required
                onChange={handleChange}
              />
              <input
                className="p-4 outline-none border border-gray-300 my-1"
                type="number"
                name="projectNo"
                value={product.projectNo ?? ""}
                placeholder="프로젝트No"
                required
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded float-right mb-3 z-10"
                disabled={isUploading}
              >
                {isUploading ? "업로드중..." : "등록하기"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
