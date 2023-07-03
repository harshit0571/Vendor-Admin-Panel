"use client";
import NavLayout from "@/components/NavLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [EditCategory, setEditCategory] = useState(null);
  const [Input, setInput] = useState("");
  const [Id, setId] = useState("");
  const [categories, setcategories] = useState("");
  const [Parent, setParent] = useState(null);
  const [properties, setProperties] = useState([]);
  const saveCategory = async (e) => {
    if (EditCategory) {
      e.preventDefault();
      await axios.put("/api/categories", {
        input: Input,
        parent: Parent,
        _id: Id,
      });
      setEditCategory(null);
      setInput("");
    } else {
      console.log("e");
      e.preventDefault();
      await axios.post("/api/categories", { input: Input, parent: Parent });
      setInput("");
    }
  };
  const editCategory = async (category) => {
    setEditCategory(category);
    setInput(category.name);
    setParent(category.parent?._id);
    setId(category._id);
  };

  function addProperty() {
    setProperties((prev) => {
      return [...prev, { name: "", values: "" }];
    });
  }
  function handlePropertyNameChange(index, property, newName) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].name = newName;
      return properties;
    });
  }
  function handlePropertyValuesChange(index, property, newValues) {
    setProperties((prev) => {
      const properties = [...prev];
      properties[index].values = newValues;
      return properties;
    });
  }
  function removeProperty(indexToRemove) {
    setProperties((prev) => {
      return [...prev].filter((p, pIndex) => {
        return pIndex !== indexToRemove;
      });
    });
  }
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

      <div className="mb-2">
        <label className="block">Properties</label>
        <button
          onClick={addProperty}
          type="button"
          className="btn-default text-sm mb-2"
        >
          Add new property
        </button>
        {properties.length > 0 &&
          properties.map((property, index) => (
            <div key={property.name} className="flex gap-1 mb-2">
              <input
                type="text"
                value={property.name}
                className="mb-0"
                onChange={(ev) =>
                  handlePropertyNameChange(index, property, ev.target.value)
                }
                placeholder="property name (example: color)"
              />
              <input
                type="text"
                className="mb-0"
                onChange={(ev) =>
                  handlePropertyValuesChange(index, property, ev.target.value)
                }
                value={property.values}
                placeholder="values, comma separated"
              />
              <button
                onClick={() => removeProperty(index)}
                type="button"
                className="btn-red"
              >
                Remove
              </button>
            </div>
          ))}
      </div>

      <div>
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
              categories.map((category) =>
                category ? (
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
                ) : null
              )}
          </tbody>
        </table>
      </div>
    </NavLayout>
  );
};

export default Categories;
