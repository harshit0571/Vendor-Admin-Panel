import axios from "axios";

export const ProductForm = ({ Name, Post, onSubmit, setPost }) => {
  const uploadImage = async (e) => {
    const files = e.target.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const File of files) {
        data.append("file", File);
      }
      const res = await axios.post("api/uploadPhoto", {
        Headers: { "Content-Type": "multipart/form-data" },
      });
    }
  };

  return (
    <>
      <h1>{Name} Product</h1>
      <form onSubmit={onSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          placeholder="product name"
          value={Post.title}
          onChange={(e) => {
            setPost({ ...Post, title: e.target.value });
          }}
        />
        <label>Photos:</label>
        <div className="mb-2 mt-2">
          <label className="w-24 h-24 border bg-gray-200 rounded-lg justify-center items-center cursor-pointer flex">
            upload
            <input type="file" className="hidden" onChange={uploadImage} />
          </label>
          {Post.productImages ? (
            <div>ff</div>
          ) : (
            <div>No photos in this product</div>
          )}
        </div>
        <label>Product Description:</label>
        <textarea
          placeholder="description"
          value={Post.description}
          onChange={(e) => {
            setPost({ ...Post, description: e.target.value });
          }}
        ></textarea>
        <label>Product Price:</label>
        <input
          placeholder="price"
          value={Post.price}
          onChange={(e) => {
            setPost({ ...Post, price: e.target.value });
          }}
        />

        <button type="submit" className="btn_primary">
          Save
        </button>
      </form>
    </>
  );
};

export default ProductForm;
