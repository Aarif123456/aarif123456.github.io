export interface SharedData {
    basic_info?: SharedBasicInfo;
    skills?: SharedSkills;
}
export interface SharedBasicInfo {
    name: string;
    titles?: [string];
    social?: [SharedSocialEntity];
    image: string;
}
export interface SharedSocialEntity {
    name: string;
    url: string;
    class: string;
}
export interface SharedSkills {
    icons?: [IconsEntity];
}
export interface IconsEntity {
    name: string;
    level: string;
}
