import { FunctionComponent, StrictMode, useCallback, useEffect, useState } from 'react';
import './App.scss';
import $ from 'jquery';
import { Header, Footer, About, Experience, Projects, Skills, SharedData, ResumeData } from './components';

export const App: FunctionComponent = () => {
    const [resumeData, setResumeData] = useState<ResumeData>({});
    const [sharedData, setSharedData] = useState<SharedData>({});
    const sharedPath = 'data/portfolioSharedData.json';
    const resumePath = 'data/resumeEn.json';

    const loadResumeFromPath = (path: string) => {
        void $.ajax({
            url: path,
            dataType: 'json',
            cache: false,
            success: function (data: ResumeData) {
                setResumeData(data);
            },
            error: function (_xhr: unknown, _status: string, err: string) {
                console.warn(err);
            }
        });
    };

    const loadSharedData = (path: string) => {
        void $.ajax({
            url: path,
            dataType: 'json',
            cache: false,
            success: function (data: SharedData) {
                setSharedData(data);
            },
            error: function (_xhr: unknown, _status: string, err: string) {
                console.warn(err);
            }
        });
    };
    const loadSharedDataCallback = useCallback(() => {
        loadSharedData(sharedPath);
    }, [sharedPath]);

    const loadResumeFromPathCallback = useCallback(() => {
        loadResumeFromPath(resumePath);
    }, [resumePath]);

    useEffect(() => {
        loadSharedDataCallback();
        loadResumeFromPathCallback();
    }, [loadSharedDataCallback, loadResumeFromPathCallback]);

    useEffect(() => {
        document.title = `${sharedData?.basic_info?.name ?? 'My Portfolio'}`;
    }, [sharedData]);

    return (
        <StrictMode>
            <div>
                <Header sharedData={sharedData.basic_info} />
                <About resumeBasicInfo={resumeData.basic_info} sharedBasicInfo={sharedData.basic_info} />
                <Projects resumeProjects={resumeData.projects} resumeBasicInfo={resumeData.basic_info} />
                <Experience resumeExperience={resumeData.experience} resumeBasicInfo={resumeData.basic_info} />
                <Skills sharedSkills={sharedData.skills} resumeBasicInfo={resumeData.basic_info} />
                <Footer sharedBasicInfo={sharedData.basic_info} />
            </div>
        </StrictMode>
    );
};
