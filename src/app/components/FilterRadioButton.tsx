import React from "react";

export default function FilterRadioButton() {
  return (
    <div className="flex md:table-cell">
      <div>
        <input
          type="radio"
          id="health"
          name="tag_filter"
          value="health"
        ></input>
        <label htmlFor="health">Health</label>
      </div>
      <div>
        <input
          type="radio"
          id="education"
          name="tag_filter"
          value="education"
        ></input>
        <label htmlFor="education">Education</label>
      </div>

      <div>
        <input
          type="radio"
          id="cancer"
          name="tag_filter"
          value="cancer"
        ></input>
        <label htmlFor="cancer">Cancer</label>
      </div>
      <div>
        <input
          type="radio"
          id="educisrael-palestineation"
          name="tag_filter"
          value="israel-palestine"
        ></input>
        <label htmlFor="israel-palestine">Israel-Palestine</label>
      </div>
      <div>
        <input
          type="radio"
          id="ukraine"
          name="tag_filter"
          value="ukraine"
        ></input>
        <label htmlFor="ukraine">Ukraine</label>
      </div>
      <div>
        <input
          type="radio"
          id="poverty"
          name="tag_filter"
          value="poverty"
        ></input>
        <label htmlFor="poverty">Poverty</label>
      </div>
      <div>
        <input
          type="radio"
          id="food-security"
          name="tag_filter"
          value="food-security"
        ></input>
        <label htmlFor="food-security">Food-security</label>
      </div>
      <div>
        <input
          type="radio"
          id="adoption"
          name="tag_filter"
          value="adoption"
        ></input>
        <label htmlFor="adoption">Adoption</label>
      </div>
      <div>
        <input
          type="radio"
          id="autism"
          name="tag_filter"
          value="autism"
        ></input>
        <label htmlFor="autism">Autism</label>
      </div>
      <div>
        <input
          type="radio"
          id="disabilities"
          name="tag_filter"
          value="disabilities"
        ></input>
        <label htmlFor="disabilities">Disabilities</label>
      </div>
      <div>
        <input
          type="radio"
          id="refugees"
          name="tag_filter"
          value="refugees"
        ></input>
        <label htmlFor="refugees">Refugees</label>
      </div>
    </div>
  );
}
