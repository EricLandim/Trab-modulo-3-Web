import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";
import { Link } from "react-router-dom";
import "./style.css";

const ListAllMovies = () => {
  const [categorys, setCategorys] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveCategorys();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveCategorys = () => {
    CategoryDataService.getAll()
      .then((response) => {
        setCategorys(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveCategory = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
  };

  const findByName = () => {
    if (searchName !== "") {
      CategoryDataService.findByName(searchName)
        .then((response) => {
          setCategorys(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      retrieveCategorys();
    }
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de Filmes</h4>

        <ul className="list-group">
          {categorys &&
            categorys.map((category, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                style={{ cursor: "pointer" }}
                onClick={() => setActiveCategory(category, index)}
                key={index}
              >
                {category.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentCategory ? (
          <div>
            <h4>Descrição do Filme</h4>
            <div>
              <label>
                <strong>Nome:</strong>
              </label>
              {currentCategory.name}
            </div>
            <div>
              <label>
                <strong>Quantidade:</strong>
              </label>
              {currentCategory.quantityInPackage}
            </div>
            <div>
              <label>
                <strong>Plataforma:</strong>
              </label>
              {currentCategory.unitOfMovie}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ListAllMovies;
