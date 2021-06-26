import { FunctionComponent } from 'react';
import { BasicInfo, SharedSkills, createIcon } from '.';

type Props = {
    resumeBasicInfo?: BasicInfo;
    sharedSkills?: SharedSkills;
};

export const Skills: FunctionComponent<Props> = (props) => {
    const { sharedSkills, resumeBasicInfo } = props;
    if (!(sharedSkills && resumeBasicInfo)) return <div />;
    const sectionName = resumeBasicInfo.section_name.skills;
    const skills = sharedSkills.icons?.map(function (skills, i) {
        return (
            <li className='list-inline-item mx-3' key={i}>
                <span>
                    <div className='text-center skills-tile'>
                        <i className={createIcon(skills.name)} style={{ fontSize: '220%' }}>
                            <p className='text-center' style={{ fontSize: '30%', marginTop: '4px' }}>
                                {skills.name}
                            </p>
                        </i>
                    </div>
                </span>
            </li>
        );
    });

    return (
        <section id='skills'>
            <div className='col-md-12'>
                <div className='col-md-12'>
                    <h1 className='section-title'>
                        <span className='text-white'>{sectionName}</span>
                    </h1>
                </div>
                <div className='col-md-12 text-center'>
                    <ul className='list-inline mx-auto skill-icon'>{skills}</ul>
                </div>
            </div>
        </section>
    );
};
