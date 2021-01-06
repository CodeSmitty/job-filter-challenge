import { useState, useEffect } from "react";
import { data } from "../data/data";

const useInputValues = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [getFilteredResults, setGetFilteredResults] = useState();
  const [jobs, setJobs] = useState(data);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    (function () {
      return setGetFilteredResults(jobs);
    })();
  }, [jobs]);

  function getPropertyValues(inputValue) {
    let jobProperty = [];

    jobs.filter((job) => {
      for (let key in job) {
        const jobKeys = job[key];
        if (typeof jobKeys === "object") {
          if (jobKeys.includes(inputValue)) {
            jobProperty.push(job);
            setGetFilteredResults(jobProperty);
          }
        }
        if (jobKeys === inputValue) {
          console.log(job)
          jobProperty.push(job);
          setGetFilteredResults(jobProperty);
        }
      }
      console.log(jobProperty);

      return jobProperty;
    });
    // !tags.includes(inputValue) && setTags([...tags, inputValue]);

    setIsFilterActive(true);
    return jobProperty;
  }

  const deleteFilters = (givenFilter) => {
    const deletedFilter = tags.filter((tag) => tag !== givenFilter);
    let jobProperty = [];

    jobs.filter((job) => {
      for (let key in job) {
        const jobKeys = job[key];

        if (deletedFilter.includes(jobKeys)) {
          jobProperty.push(job);
        }
      }

      if (jobProperty.length > 0) {
        console.log(jobProperty)
        setGetFilteredResults(jobProperty);
      } else {
        setGetFilteredResults(jobs);
      }

      return jobProperty;
    });

    setTags(deletedFilter);
  };

  const handleClear = () => {
    setTags([]);
    console.log("hola");
    setGetFilteredResults(jobs);
  };

  function clicked(tag) {
    const inputValues = tag;

    if (tags.includes(inputValues)) return;

    setTags([...tags, inputValues]);

    getPropertyValues(inputValues);
  }

  console.log(tags)

  return [
    isFilterActive,
    clicked,
    getFilteredResults,
    tags,
    deleteFilters,
    handleClear,
  ];
};

export default useInputValues;
