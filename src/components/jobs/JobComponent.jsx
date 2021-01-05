import React, { useState } from "react";
import "./jobComponent.css";
import FilterLists from "../filterLists/filterLists";

const JobComponent = ({ jobData, handleClick, index }) => {
  const languages = jobData.languages.map((language) => (
    <FilterLists value={jobData.language} clicked={() => handleClick(language)}>
      {language}
    </FilterLists>
  ));
  const tools = jobData.tools.map((tool) => (
    <FilterLists value={jobData.tool} clicked={() => handleClick(tool)}>
      {tool}
    </FilterLists>
  ));

  return (
    <div
      id={index}
      style={
        jobData.featured || jobData.new
          ? { borderLeft: "solid 3px hsl(180, 29%, 50%)" }
          : null
      }
      className="job-container"
    >
      <div className="img-and-jobs-container">
        <div className="job-img-container">
          <img className="logo" src={jobData.logo} alt="logo" />
        </div>
        <div className="job-info-container">
          <div className="job-title-and-company">
            <span
              className={
                jobData.featured || jobData.new ? "featured-or-new" : null
              }
            >
              <p className="company-title">{jobData.company}</p>
              {jobData.new ? (
                <span className="newJob">
                  <p>New!</p>{" "}
                </span>
              ) : null}
              {jobData.featured ? (
                <span className="featuredJob">
                  <p>Featured</p>
                </span>
              ) : null}
            </span>
          </div>
          <h4 className="job-position">{jobData.position}</h4>
          <div className="job-postedAt-information">
            <p className="info-data">{jobData.postedAt}</p>
            <span className="info-data">*</span>
            <p className="info-data">{jobData.contract}</p>
            <span className="info-data">*</span>
            <p className="info-data">{jobData.location}</p>
          </div>
        </div>
      </div>
      <div className="filter-tablets-container">
        <FilterLists
          value={jobData.role}
          clicked={() => handleClick(jobData.role)}
        >
          {jobData.role}
        </FilterLists>
        <FilterLists
          value={jobData.level}
          clicked={() => handleClick(jobData.level)}
        >
          {jobData.level}
        </FilterLists>
        {languages}
        {tools}
      </div>
    </div>
  );
};
export default JobComponent;
