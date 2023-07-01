"use client";
import NavLayout from "@/components/NavLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [EditCategory, setEditCategory] = useState(null);
  const [Input, setInput] = useState("");
  const [categories, setcategories] = useState("");
  const [Parent, setParent] = useState(1);
  const saveCategory = async (e) => {
    e.preventDefault();
    await axios.post("/api/categories", { input: Input, parent: Parent });
    setInput("");
  };
  const editCategory = async (category) => {
    setEditCategory(category);
    setInput(category.name);
    setParent(category.parent?._id);
    console.log(category);
  };
  useEffect(() => {
    const getCategories = async () => {
      Response = await fetch("/api/categories");
      const data = await Response.json();
      setcategories(data);
    };
    getCategories();
  }, []);
  return (
    <NavLayout>
      <h1>Categories</h1>
      <label>{EditCategory ? "Edit Category" : "New category name:"}</label>
      <form onSubmit={saveCategory}>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="categories name"
            value={Input}
            className="mb-0"
            onChange={(ev) => setInput(ev.target.value)}
          />
          <select onChange={(ev) => setParent(ev.target.value)}>
            <option value={1}>No parent category</option>
            {categories?.length &&
              categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
          <button className="btn_primary py-1" type="submit">
            Save
          </button>
        </div>
      </form>
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Category Name</td>
            <td>Parent Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories?.length &&
            categories.map((category) => (
              <tr key={category._id}>
                <td>{category?.name}</td>
                <td>{category?.parent?.name}</td>
                <td className="flex gap-3">
                  <button
                    className="btn_primary"
                    onClick={() => {
                      editCategory(category);
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn_primary">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </NavLayout>
  );
};

export default Categories;
