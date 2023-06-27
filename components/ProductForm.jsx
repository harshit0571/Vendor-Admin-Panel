export const ProductForm = ({ Name, Post, onSubmit, setPost }) => {
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
