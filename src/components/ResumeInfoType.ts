export interface ResumeData {
    basic_info?: BasicInfo;
    projects?: [ProjectsEntity];
    experience?: [ExperienceEntity];
}
export interface BasicInfo {
    description_header: string;
    description: string;
    section_name: SectionName;
}
export interface SectionName {
    about: string;
    projects: string;
    skills: string;
    experience: string;
}
export interface ProjectsEntity {
    title: string;
    startDate: string;
    endDate?: string;
    description: string;
    images?: [string];
    url: string;
    technologies?: [TechnologiesEntity];
}
export interface TechnologiesEntity {
    name: string;
}
export interface ExperienceEntity {
    company: string;
    title: string;
    years: string;
    mainTech?: [string];
    technologies?: [string];
    class: string;
}
