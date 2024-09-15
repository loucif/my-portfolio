import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Language from "./components/Language";
import Skill from "./components/Skill";
import Interest from "./components/Interest";
import axios from "axios";
import { useState, useEffect } from "react";
import type { Data } from "./types/AppType";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 10000,
});

const Profile: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [error_, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<Data>(import.meta.env.VITE_ENDPOINT);
        setData(JSON.parse(JSON.stringify(response.data))[0]);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : error_ ? (
        <div>{error_}</div>
      ) : data ? (
        <>
          <Header name={data?.name} designation={data?.designation} />
          <div className="row">
            <div className="col-md-8 content">
              <Education education={data?.education} />
              <Experience experiences={data?.experiences} />
              <Project projects={data?.projects} />
            </div>
            <div className="col-md-4 photo">
              <div className="profil-image"></div>
              <Contact contact={data?.contact} />
              <Skill skills={data?.skill} />
              <Language languages={data?.language} />
              <Interest interests={data?.interest} />
            </div>
          </div>
        </>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Profile;
