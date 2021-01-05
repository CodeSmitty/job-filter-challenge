import React from "react";
import JobComponent from "../jobs/JobComponent";
import useInputValues from "../../utility/data.reduce";
import TagSearchBar from "../tagSearchBar/tagSearchBar";


const Filter = () => {
  const [isFilter, clicked, filteredArrays, tags, deleteFilters] = useInputValues();

  const jobs = filteredArrays?.map((job, i) => {
      

   

    return <JobComponent index={i} key={job.id} handleClick={clicked} jobData={job} />;
  });

  return (
    <div className='filter-home'>
      {tags.length > 0 ?(<TagSearchBar filters={tags} handleDeleteFilters={deleteFilters} />) :null}
      <div className="jobs-container">
      {jobs}
      </div>
    </div>
  );
};

export default Filter;
