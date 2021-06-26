import { FunctionComponent } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge';
import { BasicInfo, ExperienceEntity } from '.';

type Props = {
    resumeExperience?: [ExperienceEntity];
    resumeBasicInfo?: BasicInfo;
};

export const Experience: FunctionComponent<Props> = (props) => {
    const { resumeExperience = [], resumeBasicInfo } = props;
    const sectionName = resumeBasicInfo?.section_name.experience ?? '';
    const work = resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;
        const mainTech = mainTechnologies?.map((technology, i) => {
            return (
                <Badge pill className='main-badge mr-2 mb-2' key={i}>
                    {technology}
                </Badge>
            );
        });
        const tech = technologies?.map((technology, i) => {
            return (
                <Badge pill className='experience-badge mr-2 mb-2' key={i}>
                    {technology}
                </Badge>
            );
        });
        return (
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                date={work.years}
                iconStyle={{
                    background: '#AE944F',
                    color: '#fff',
                    textAlign: 'center'
                }}
                icon={<i className={`${work.class} experience-icon`} />}
                key={i}>
                <div style={{ textAlign: 'left', marginBottom: '4px' }}>{mainTech}</div>

                <h3 className='vertical-timeline-element-title' style={{ textAlign: 'left' }}>
                    {work.title}
                </h3>
                <h4 className='vertical-timeline-element-subtitle' style={{ textAlign: 'left' }}>
                    {work.company}
                </h4>
                <div style={{ textAlign: 'left', marginTop: '15px' }}>{tech}</div>
            </VerticalTimelineElement>
        );
    });

    return (
        <section id='resume' className='pb-5'>
            <div className='col-md-12 mx-auto'>
                <div className='col-md-12'>
                    <h1 className='section-title' style={{ color: 'black' }}>
                        <span className='text-black' style={{ textAlign: 'center' }}>
                            {sectionName}
                        </span>
                    </h1>
                </div>
            </div>
            <div className='col-md-8 mx-auto'>
                <VerticalTimeline>
                    {work}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: '#AE944F',
                            color: '#fff',
                            textAlign: 'center'
                        }}
                        icon={<i className='fas fa-hourglass-start mx-auto experience-icon' />}
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
};
