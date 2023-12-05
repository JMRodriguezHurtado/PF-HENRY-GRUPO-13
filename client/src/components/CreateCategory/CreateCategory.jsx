import { useState } from "react";
import axios from "axios";
import validation from "../../utils/Validation/validationCreateCategory";
import { useDispatch } from "react-redux";
import { postCategory } from "../../redux/actions";

const CreateCategory = () => {
  const dispatch = useDispatch();

  const [errors, serErrors] = useState({});
  const [category, setCategory] = useState({
    name: '',
    img: null,
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCategory({
      ...category,
      [name]: value
    });

    serErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validation({ ...category, [name]: value })[name]
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setCategory({
      ...category,
      img: file
    });
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(postCategory(category));
  };

  const isFormValid =
  category.img === null ||
  !category.name ||
  !category.description;

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-10 bg-gray-50 bg-gray-500 bg-no-repeat bg-cover relative items-center">
      <div className="sm:max-w-lg w-full p-3 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-0 text-3xl font-bold text-gray-900">
            Crea una categoria!
          </h2>
        </div>
        
        <form 
          className="mt-1 space-y-1" 
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Name</label>
            <input 
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
              type="text" 
              value={category.name}                  
              onChange={handleChange}
              placeholder="Escribe el nombre..."
              name="name"
            />
            {errors.name && (
              <p classNameName="text-red-900 text-xs italic">{errors.name}</p>
            )}
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Descripción</label>
            <input 
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
              type="text" 
              value={category.description}                  
              onChange={handleChange}
              name="description"
              placeholder="Describe tu categoria..."
            />
            {errors.description && (
              <p classNameName="text-red-900 text-xs italic">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 space-y-2 ">
            <label className="text-sm font-bold text-gray-500 tracking-wide ">Imagen</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center cursor-pointer">
                { category.img ? (
                  <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                    <img
                      className="has-mask  object-center" 
                      src={URL.createObjectURL(category.img)}
                      alt={`${category.name} image preview`}
                    />
                  </div>
                ) : (
                  <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                      <img className="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                    </div>
                    <p className="pointer-none text-gray-500 "> <span className="text-blue-500">Selecciona</span> la imagen</p>
                  </div>
                )}

                <input 
                  type="file" 
                  accept="image/*"  
                  name="img"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              </div>
          </div>

          <p className="text-sm text-gray-300">
            <span>Solo imagenes</span>
          </p>
          <div>
            <button type="submit" className="my-0 w-full flex justify-center bg-blue-500 text-gray-100 p-2  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
              Crear!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default CreateCategory;