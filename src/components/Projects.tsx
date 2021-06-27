import { FunctionComponent, useReducer, Reducer } from 'react';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { ProjectsEntity, BasicInfo } from '.';

type Props = {
    resumeBasicInfo?: BasicInfo;
    resumeProjects?: [ProjectsEntity];
};

type ModalData = {
    detailsModalShow: boolean;
    deps?: ProjectsEntity;
};
export const Projects: FunctionComponent<Props> = (props) => {
    const [state, setState] = useReducer<Reducer<ModalData, Partial<ModalData>>>((state, newState) => ({ ...state, ...newState }), {
        detailsModalShow: false,
        deps: undefined
    });

    const { resumeProjects, resumeBasicInfo } = props;
    const detailsModalShow = (data: ProjectsEntity) => {
        setState({ detailsModalShow: true, deps: data });
    };

    const detailsModalClose = () => setState({ detailsModalShow: false });
    if (!(resumeProjects && resumeBasicInfo)) return <div />;
    const sectionName = resumeBasicInfo.section_name.projects;
    const projects = resumeProjects.map(function (projects) {
        /* TODO: Add pictures for all projects */
        // const projectImage = 'images' in projects ? (projects.images as [string]) : [];
        const projectImage: string[] = [];
        return (
            <div className='col-sm-12 col-md-6 col-lg-4' key={projects.title} style={{ cursor: 'pointer' }}>
                <span className='portfolio-item d-block'>
                    <div className='foto' onClick={() => detailsModalShow(projects)}>
                        <div>
                            {projectImage.length > 0 && (
                                <img
                                    src={projectImage[0] ?? ''}
                                    alt='projectImages'
                                    height='230'
                                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                                />
                            )}
                            {projects.startDate && <span className='project-date'>{projects.startDate}</span>}
                            {projects.endDate && <span className='project-date'>{projects.endDate}</span>}
                            <br />
                            <p className='project-title-settings mt-3'>{projects.title}</p>
                        </div>
                    </div>
                </span>
            </div>
        );
    });

    return (
        <section id='portfolio'>
            <div className='col-md-12'>
                <h1 className='section-title' style={{ color: 'black' }}>
                    <span>{sectionName}</span>
                </h1>
                <div className='col-md-12 mx-auto'>
                    <div className='row mx-auto'>{projects}</div>
                </div>
                <ProjectDetailsModal show={state.detailsModalShow} onHide={detailsModalClose} data={state.deps} />
            </div>
        </section>
    );
};
