"use client";
import React, { ChangeEvent } from "react";

type FilterProps = {
  handleRadioFilter: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function FilterRadioButton({ handleRadioFilter }: FilterProps) {
  return (
    <div className="flex md:table-cell md:mx-auto md:ms-auto">
      <div>
        <input
          type="radio"
          id="all"
          name="tag_filter"
          value=""
          onChange={handleRadioFilter}
        ></input>
        <label className="bg-red-300" htmlFor="all">
          All
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="health"
          name="tag_filter"
          value="health"
          onChange={handleRadioFilter}
        ></input>
        <label className="bg-red-300" htmlFor="health">
          Health
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="education"
          name="tag_filter"
          value="education"
          onChange={handleRadioFilter}
        ></input>
        <label className="bg-blue-300" htmlFor="education">
          Education
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="cancer"
          name="tag_filter"
          value="cancer"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="cancer">Cancer</label>
      </div>
      <div>
        <input
          type="radio"
          id="educisrael-palestineation"
          name="tag_filter"
          value="israel-palestine"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="israel-palestine">Israel-Palestine</label>
      </div>
      <div>
        <input
          type="radio"
          id="ukraine"
          name="tag_filter"
          value="ukraine"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="ukraine">Ukraine</label>
      </div>
      <div>
        <input
          type="radio"
          id="poverty"
          name="tag_filter"
          value="poverty"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="poverty">Poverty</label>
      </div>
      <div>
        <input
          type="radio"
          id="food-security"
          name="tag_filter"
          value="food-security"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="food-security">Food-security</label>
      </div>
      <div>
        <input
          type="radio"
          id="adoption"
          name="tag_filter"
          value="adoption"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="adoption">Adoption</label>
      </div>
      <div>
        <input
          type="radio"
          id="autism"
          name="tag_filter"
          value="autism"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="autism">Autism</label>
      </div>
      <div>
        <input
          type="radio"
          id="disabilities"
          name="tag_filter"
          value="disabilities"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="disabilities">Disabilities</label>
      </div>
      <div>
        <input
          type="radio"
          id="refugees"
          name="tag_filter"
          value="refugees"
          onChange={handleRadioFilter}
        ></input>
        <label htmlFor="refugees">Refugees</label>
      </div>
    </div>
  );
}
